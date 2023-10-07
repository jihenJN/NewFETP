import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/models/Client';
import { Invoice } from 'src/app/models/Invoice';
import { ClientService } from 'src/app/services/client.service';
import { InvoiceService } from 'src/app/services/invoice.service';
import { ProductService } from 'src/app/services/product.service';
import { status } from 'src/app/models/Status';
import { ZonedDateTime, ZoneId } from '@js-joda/core';
import { ZonedDateTimeInterceptor } from 'src/app/_helpers/ZonedDateTime.interceptor';
import { Sale } from 'src/app/models/Sale';

@Component({
  selector: 'app-edit-invoice',
  templateUrl: './edit-invoice.component.html',
  styleUrls: ['./edit-invoice.component.css'],
})
export class EditInvoiceComponent implements OnInit {
  invoiceForm!: FormGroup;
  clientForm!: FormGroup;

  invClient: any;
  invProducts: any;
  invoiceProduct!: FormGroup<any>;
  invSales!: FormArray<any>;

  sales?: Sale[];

  invStatus: status[] = [
    status.DRAFT,
    status.SENT,
    status.RECEIVED,
    status.APPROVED,
    status.PARTIALLY_PAID,
    status.PAID,
    status.OVERDUE,
    status.VOID,
  ];

  invoice: Invoice = {
    id: '',
    code: '',
    remarks: '',
    tax: 0,
    discount: 0,
    date: new Date(),
    total: 0,
    status: '',
    client: new Client(),
    sales: [],
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private builder: FormBuilder,
    private clientService: ClientService,
    private invoiceService: InvoiceService,
    private productService: ProductService
  ) {
    const zoneId = ZoneId.of(ZonedDateTimeInterceptor.UTC_ZONE_ID);

    this.invoiceForm = this.builder.group({
      id: this.builder.control('', Validators.required),
      code: this.builder.control('', Validators.required),
      client: this.builder.group({
        id: this.builder.control('', Validators.required),
      }),

      remarks: this.builder.control(''),

      date: [
        ZonedDateTime.now(zoneId).format(
          ZonedDateTimeInterceptor.DATE_TIME_FORMAT
        ),
        Validators.required,
      ],
      discount: this.builder.control(0),
      tax: this.builder.control(19),
      total: this.builder.control(0),
      status: this.builder.control('DRAFT'),
      sales: this.builder.array([]),
    });
  }

  ngOnInit(): void {
    this.getClients();
    this.getProducts();
    this.route.paramMap.subscribe((param) => {
      var id = String(param.get('id'));
      this.getById(id);
    });
  }

  getById(id: string) {
    const date = this.invoiceForm.get('date')?.value;
    const formattedDate = ZonedDateTime.parse(date).format(
      ZonedDateTimeInterceptor.DATE_TIME_FORMAT
    );
    const invoiceData = { ...this.invoiceForm.value, date: formattedDate };

    // Access the sales FormArray
    const salesFormArray = this.invoiceForm.get('sales') as FormArray;

    this.invoiceService.getById(id).subscribe((data) => {
      this.invoice = data;
      console.log('this.sale', this.invoice);

      this.sales = this.invoice.sales;

      this.sales?.forEach((sale) => {
        salesFormArray.push(
          this.builder.group({
            quantity: this.builder.control(sale.quantity),
            unitPrice: this.builder.control(sale.product?.price),
            price: this.builder.control(sale.price),
            tax: this.builder.control(sale.tax),
            discount: this.builder.control(sale.discount),
            available: this.builder.control(sale.available),
            product: this.builder.group({
              id: this.builder.control(sale.product?.id, Validators.required),
            }),
            invoice: this.builder.group({
              id: this.builder.control(sale.invoice?.id, Validators.required),
            }),
          })
        );
      });

      //----JN It is very important to convert product(object) to form group --------//
      this.invoiceForm.patchValue({
        id: this.invoice.id,
        code: this.invoice.code,
        remarks: this.invoice.remarks,
        tax: this.invoice.tax,
        discount: this.invoice.discount,
        date: date,
        total: this.invoice.total,
        status: this.invoice.status,
        client: this.invoice.client,
        sales: this.sales,
      });
      console.log('aaa', this.sales);
    });
  }

  getProducts() {
    this.productService.get().subscribe((res) => {
      this.invProducts = res;
      console.log(this.invProducts);
    });
  }

  getClients() {
    this.clientService.get().subscribe((res) => {
      this.invClient = res;
      console.log(this.invClient);
    });
  }

  clientChange() {
    let id = this.invoiceForm.get('client.id')?.value;
    this.clientService.getById(id).subscribe((res) => {
      let data: any;
      data = res;
      if (data != null) {
        this.invoiceForm.get('remarks')?.setValue(data.address);
      }
    });
  }

  productChange(index: any) {
    this.invSales = this.invoiceForm.get('sales') as FormArray;
    this.invoiceProduct = this.invSales.at(index) as FormGroup;
    const selectedProductId =
      this.invSales.controls[index].get('product.id')?.value;
    let id = selectedProductId;
    this.productService.getById(id).subscribe((res) => {
      let data: any;
      data = res;
      if (data != null) {
        this.invoiceProduct.get('unitPrice')?.setValue(data.price);
        this.invoiceProduct.get('tax')?.setValue(data.tax);
        this.ItemCalculation(index);
      }
    });
  }

  ItemCalculation(index: any) {
    this.invSales = this.invoiceForm.get('sales') as FormArray;
    this.invoiceProduct = this.invSales.at(index) as FormGroup;
    let quantity = this.invoiceProduct.get('quantity')?.value;
    let unitPrice = this.invoiceProduct.get('unitPrice')?.value;
    let discount = this.invoiceProduct.get('discount')?.value;
    let discountRate = discount / 100;
    let price = quantity * unitPrice - quantity * unitPrice * discountRate;
    this.invoiceProduct.get('price')?.setValue(price);
    this.summuryCalculation();
  }

  RemoveSale(index: any) {
    this.invsales.removeAt(index);
    this.summuryCalculation();
  }

  get invsales() {
    return this.invoiceForm.get('sales') as FormArray;
  }

  addSale() {
    this.invSales = this.invoiceForm.get('sales') as FormArray;
    this.invSales.push(this.generateRow());
  }

  generateRow() {
    return this.builder.group({
      quantity: this.builder.control(1),
      unitPrice: this.builder.control(0),
      price: this.builder.control(0),
      tax: this.builder.control(19),
      discount: this.builder.control(0),
      available: this.builder.control(true),
      product: this.builder.group({
        id: this.builder.control('', Validators.required),
      }),
      invoice: this.builder.group({
        id: this.builder.control('', Validators.required),
      }),
    });
  }

  summuryCalculation() {
    let array = this.invoiceForm.getRawValue().sales;
    let sumTotal = 0;
    let origineSumTotal = 0;
    let globalDiscount = 0;
    array.forEach((x: any) => {
      sumTotal = sumTotal + x.price;
    });

    array.forEach((x: any) => {
      origineSumTotal = origineSumTotal + x.unitPrice * x.quantity;
    });

    globalDiscount = ((origineSumTotal - sumTotal) / origineSumTotal) * 100;

    this.invoiceForm.get('total')?.setValue(sumTotal);
    this.invoiceForm
      .get('discount')
      ?.setValue(Number(globalDiscount.toFixed(2)));
  }

  update() {
    this.invoiceService.update(this.invoiceForm.value).subscribe({
      next: (data) => {
        this.router.navigate(['/listInvoice']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
