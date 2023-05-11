import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { EditInvoiceComponent } from './edit-invoice/edit-invoice.component';
import { ListInvoiceComponent } from './list-invoice/list-invoice.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutInvoiceComponent } from './layout-invoice/layout-invoice.component';


@NgModule({
  declarations: [
    
    AddInvoiceComponent,
    EditInvoiceComponent,
    ListInvoiceComponent,
    LayoutInvoiceComponent
  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
   
    AddInvoiceComponent,
    EditInvoiceComponent,
    ListInvoiceComponent,
    LayoutInvoiceComponent
  ]
})
export class InvoiceModule { }
