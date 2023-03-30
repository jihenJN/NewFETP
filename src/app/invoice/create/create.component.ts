import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent  {

  TitlePage="create new invoice";

  constructor(private builder:FormBuilder){}

  invoiceForm = this.builder.group({

    code:this.builder.control('',Validators.required),
    total:this.builder.control({value: 'Nancy', disabled: true}),
  

  })

 

  addInvoice(){
    console.log(this.invoiceForm.value)
  }

}
