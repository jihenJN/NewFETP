import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { ProductService } from 'src/app/services/product.service';
import { status } from 'src/app/models/Status'
import { InvoiceService } from 'src/app/services/invoice.service';
import { ZonedDateTime, ZoneId } from '@js-joda/core';
import { ZonedDateTimeInterceptor } from 'src/app/_helpers/ZonedDateTime.interceptor';


@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css']
})
export class AddInvoiceComponent implements OnInit {

  invoiceForm!: FormGroup;
  clientForm!: FormGroup;

  TitlePage = "Add New Invoice";
  invSales!: FormArray<any>;
  invClient: any;
  invProducts: any;

 

  selectedClientId: string = '';

  invStatus: status[] = [
    status.DRAFT,
    status.SENT,
    status.RECEIVED,
    status.APPROVED,
    status.PARTIALLY_PAID,
    status.PAID,
    status.OVERDUE,
    status.VOID
  ];


  constructor(private builder: FormBuilder,
    private clientService: ClientService,
    private productService: ProductService,
    private invoiceService: InvoiceService,
    private router: Router) {

      const zoneId = ZoneId.of(ZonedDateTimeInterceptor.UTC_ZONE_ID);
      

    this.invoiceForm = this.builder.group({

      code: this.builder.control('', Validators.required),
      client: this.builder.group({
        id: this.builder.control('', Validators.required)
      }),

      remarks: this.builder.control(''),

      date: [
        ZonedDateTime.now(zoneId)
          .format(ZonedDateTimeInterceptor.DATE_TIME_FORMAT),
        Validators.required
      ],

      //date: this.builder.control(Date, Validators.required),
      discount: this.builder.control(0),
      tax: this.builder.control(19),
      total: this.builder.control({ value: '0', disabled: true }),
      status: this.builder.control('DRAFT'),
      sales: this.builder.array([])

    })

  }


  ngOnInit(): void {
    this.getClients();
    this.getProducts();
  }

  addInvoice() {

  
    const date = this.invoiceForm.get('date')?.value;
    console.log(date);
   
      const formattedDate = ZonedDateTime.parse(date).format(ZonedDateTimeInterceptor.DATE_TIME_FORMAT);
      const invoiceData = { ...this.invoiceForm.value, date: formattedDate };

      this.invoiceService.create(invoiceData).subscribe({
        next: (data) => {
          this.router.navigate(['/listInvoice']);
          console.log('success .....');
        },
        error: (err) => {
          console.log(err);
        }
      });




  }

  addSale() {
    this.invSales = this.invoiceForm.get('sales') as FormArray;
    this.invSales.push(this.generateRow());
  }



  get invsales() {
    return this.invoiceForm.get('sales') as FormArray;
  }

  getClients() {
    this.clientService.get().subscribe(res => {
      this.invClient = res;

      console.log(this.invClient);
    })
  }


  clientChange() {


    let id = this.invoiceForm.get('client.id')?.value

    console.log(this.invoiceForm.get('client'));
    console.log("id" + id);

    this.clientService.getById(id).subscribe(res => {
      console.log("id" + id);

      let data: any;
      data = res;
      if (data != null) {
        this.invoiceForm.get('remarks')?.setValue(
          'delivery address: ' + data.address)
      }
    })


  }

  getProducts() {
    this.productService.get().subscribe(res => {
      this.invProducts = res;
      console.log(this.invProducts);
    })
  }


  generateRow() {
    return this.builder.group({

      quantity: this.builder.control(1),
      price: this.builder.control(0),
      tax: this.builder.control(19),
      discount: this.builder.control(0),
      available: this.builder.control(true),
      product: this.builder.group({
        id: this.builder.control('', Validators.required)
      }),
      invoice: this.builder.group({
        id: this.builder.control('', Validators.required)
      }),

    })
  }




}
