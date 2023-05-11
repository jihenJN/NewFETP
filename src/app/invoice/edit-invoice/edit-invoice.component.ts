import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/models/Client';
import { Invoice } from 'src/app/models/Invoice';
import { ClientService } from 'src/app/services/client.service';
import { InvoiceService } from 'src/app/services/invoice.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-invoice',
  templateUrl: './edit-invoice.component.html',
  styleUrls: ['./edit-invoice.component.css']
})


export class EditInvoiceComponent  implements OnInit{
  
  invoiceForm!:FormGroup;
  clientForm!: FormGroup;

  invClients: any;


 invoice: Invoice = {
    id: '',
    code:'',
    remarks:'',
    tax:0,
    discount:0,
    date:new Date,
    total:0,
    status:'',
    client:new Client,
       
  };

 

  constructor(private route: ActivatedRoute,
    private router:Router,
    private builder: FormBuilder,
    private clientService: ClientService,
    private productService: ProductService,
    private invoiceService: InvoiceService,) {

      this.invoiceForm = this.builder.group({
        id: this.builder.control( { disabled: true }),
        code: this.builder.control(''),
        remarks: this.builder.control(''),
        tax: this.builder.control(0),
        discount: this.builder.control(0),
        date: this.builder.control(Date),
        total: this.builder.control(0),
        status: this.builder.control(''),
        client: this.builder.group({
          id: this.builder.control('',Validators.required),
          name: this.builder.control('')
        }),

      
  
      })
  
      
     }

  
  ngOnInit(): void {
    
   
    this.getClients();
  
    this.route.paramMap.subscribe((param) => {
      var id = String(param.get('id'));
      this.getById(id);
    });

   
  }



  getById(id: string) {
    this.invoiceService.getById(id).subscribe((data) => {
      this.invoice = data;
      console.log( "this.sale" , this.invoice);
      //----JN It is very important to convert product(object) to form group --------//
            this.invoiceForm.patchValue({
            id: this.invoice.id,
            code: this.invoice.code,
            remarks: this.invoice.remarks,
            tax: this.invoice.tax,
            discount: this.invoice.discount,
            date: this.invoice.date,
            total:this.invoice.total,
            status: this.invoice.status,
            client: this.invoice.client?.name,
          


          });
    
        });
  


  }


  getClients() {
    this.clientService.get().subscribe(res => {
      this.invClients = res;
      console.log(this.invClients);
    })
  }

  



  update() {
    this.invoiceService.update(this.invoiceForm.value)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/listInvoice"]);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }


}
