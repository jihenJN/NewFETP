import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  selector: 'app-layout-invoice',
  templateUrl: './layout-invoice.component.html',
  styleUrls: ['./layout-invoice.component.css'],
})
export class LayoutInvoiceComponent implements OnInit {
  invoiceForm!: FormGroup;
  clientForm!: FormGroup;
  invInvoice: any;
  sales?: Sale[];

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
  // -----------progress bar -------------

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  // ----------- end progress bar -------------

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private builder: FormBuilder,
    private invoiceService: InvoiceService,
    private _formBuilder: FormBuilder
  ) {
    const zoneId = ZoneId.of(ZonedDateTimeInterceptor.UTC_ZONE_ID);

    this.invoiceForm = this.builder.group({
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
    this.route.paramMap.subscribe((param) => {
      var id = String(param.get('id'));
      this.getById(id);
    });
  }

  getById(id: string) {
    const date = this.invoiceForm.get('date')?.value;
    console.log(date);

    const formattedDate = ZonedDateTime.parse(date).format(
      ZonedDateTimeInterceptor.DATE_TIME_FORMAT
    );
    const invoiceData = { ...this.invoiceForm.value, date: formattedDate };

    this.invoiceService.getById(id).subscribe((data) => {
      this.invoice = data;
      console.log('this.sale', this.invoice);

      this.sales = this.invoice.sales;

      this.invoiceForm.patchValue({
        id: this.invoice.id,
        code: this.invoice.code,
        remarks: this.invoice.remarks,
        tax: this.invoice.tax,
        discount: this.invoice.discount,
        date: this.invoice.date,
        total: this.invoice.total,
        status: this.invoice.status,
        client: this.invoice.client,
        sales: this.sales,
      });
    });
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
