import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent  {

  TitlePage="Add New Invoice";
  invSales!:FormArray<any>;

  constructor(private builder:FormBuilder){}

  invoiceForm = this.builder.group({

    code:this.builder.control('',Validators.required),
    total:this.builder.control({value: '0', disabled: true}),
    sales:this.builder.array([])
   

  })
  addInvoice(){
    console.log(this.invoiceForm.value);

  }


  addSale(){
   this.invSales= this.invoiceForm.get('sales') as FormArray;
   this.invSales.push(this.generateRow());
  }


  
  get invsales(){
    return this.invoiceForm.get('sales') as FormArray;
  }



  generateRow(){
    return this.builder.group({
      Product:this.builder.control(''),
      Price:this.builder.control(0),
      Qty:this.builder.control(1),
      
    })
  }

}