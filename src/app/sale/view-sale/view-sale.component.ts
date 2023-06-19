import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Invoice } from 'src/app/models/Invoice';
import { Product } from 'src/app/models/Product';
import { Sale } from 'src/app/models/Sale';
import { SaleService } from 'src/app/services/sale.service';

@Component({
  selector: 'app-view-sale',
  templateUrl: './view-sale.component.html',
  styleUrls: ['./view-sale.component.css']
})
export class ViewSaleComponent  implements OnInit{
  
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
    private router:Router,private saleService: SaleService){}

  
  ngOnInit(): void {

   this.route.paramMap.subscribe((param) => {
      var id = String(param.get('id'));
      this.getById(id);
    });

   
  }



  getById(id: string) {
    this.saleService.getById(id).subscribe((data) => {
      this.sale = data;
      console.log( "this.sale" , this.sale);
     
        });
  


  }


}
