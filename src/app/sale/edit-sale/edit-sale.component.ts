import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Invoice } from 'src/app/models/Invoice';
import { Product } from 'src/app/models/Product';
import { Sale } from 'src/app/models/Sale';
import { InvoiceService } from 'src/app/services/invoice.service';
import { ProductService } from 'src/app/services/product.service';
import { SaleService } from 'src/app/services/sale.service';

@Component({
  selector: 'app-edit-sale',
  templateUrl: './edit-sale.component.html',
  styleUrls: ['./edit-sale.component.css']
})
export class EditSaleComponent  implements OnInit{
  
  saleForm!:FormGroup;
  invoiceForm!: FormGroup;
  productForm!: FormGroup;

  sleProducts: any;

  sleInvoices: any;


  sale: Sale = {
    id: '',
    quantity:0,
    price:0,
    tax:0,
    discount:0,
    available:true,
    product:new Product,
    invoice:new Invoice
    
  };


  constructor(private route: ActivatedRoute,
    private router:Router,
    private builder: FormBuilder,
    private saleService: SaleService,
    private productService: ProductService,
    private invoiceService: InvoiceService,) {

      this.saleForm = this.builder.group({
        id: this.builder.control( { disabled: true }),
        quantity: this.builder.control(''),
        price: this.builder.control(0),
        tax: this.builder.control(0),
        discount: this.builder.control(0),
        available: this.builder.control(true),

        product: this.builder.group({
          id: this.builder.control( '',Validators.required),
          name: this.builder.control('')
        }),

        invoice: this.builder.group({
          id: this.builder.control( '',Validators.required),
          code: this.builder.control('')
        }),
  
      })
  
      
     }

  
  ngOnInit(): void {
    
    this.getInvoices();
    this.getProducts();
  
    this.route.paramMap.subscribe((param) => {
      var id = String(param.get('id'));
      this.getById(id);
    });

   
  }



  getById(id: string) {
    this.saleService.getById(id).subscribe((data) => {
      this.sale = data;
      console.log( "this.sale" , this.sale);
      //----JN It is very important to convert product(object) to form group --------//
            this.saleForm.patchValue({
            id: this.sale.id,
            quantity: this.sale.quantity,
            price: this.sale.price,
            tax:this.sale.tax,
            discount:this.sale.discount,
            available: this.sale.available,
            product: this.sale.product?.name,
            invoice: this.sale.invoice?.code
          });
    
        });
  


  }


  getProducts() {
    this.productService.get().subscribe(res => {
      this.sleProducts = res;
      console.log(this.sleProducts);
    })
  }

  getInvoices() {
    this.invoiceService.get().subscribe(res => {
      this.sleInvoices= res;
      console.log(this.sleInvoices);
    })
  }



  update() {
    this.saleService.update(this.saleForm.value)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/listSale"]);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }


}
