import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { ProductService } from 'src/app/services/product.service';
import {status} from 'src/app/models/Status'
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css']
})
export class AddInvoiceComponent implements OnInit  {
  
  invoiceForm!: FormGroup;
  clientForm!:  FormGroup;

  TitlePage = "Add New Invoice";
  invSales!: FormArray<any>;
  invClient: any;
  invProducts: any;
  
  invStatus:status[] = [
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

      this.invoiceForm = this.builder.group({
    
        code: this.builder.control('', Validators.required),
        client: this.builder.control(''),
        remarks: this.builder.control(''),
        date:this.builder.control(Date, Validators.required),
        discount:this.builder.control(0),
        tax:this.builder.control(19),
        total: this.builder.control({ value: '0', disabled: true }),
        status:this.builder.control('DRAFT'),
        sales: this.builder.array([])
    
      })
    
     }


  ngOnInit(): void {
    this.getClients();
    this.getProducts();
  }

 

  

  addInvoice() {
    console.log(this.invoiceForm.value);
    
    this.invoiceService.create(this.invoiceForm.value)
    .subscribe({
      next: (data) => {
        this.router.navigate(["/invoiceList"])
        console.log("success .....");
      },
      error: (err) => {
        console.log(err);
      }
    })
    

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


  clientChange(){
    let idclient = this.invoiceForm.get('client')?.value



    this.clientService.getById(idclient).subscribe(res=>{
      console.log("idclient"+idclient);

      let data:any;
      data =res;
      if (data!=null)
       { this.invoiceForm.get('remarks')?.setValue(
        '-Customer details-\n  address: '+data.address+'\n  phone: '+data.phone+'\n  email: '+data.email

       )}
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
      Product: this.builder.control(''),
      Price: this.builder.control(0),
      Qty: this.builder.control(1),

    })
  }



  
}
