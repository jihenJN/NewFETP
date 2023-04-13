import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListInvoiceComponent } from './list-invoice/list-invoice.component';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { EditInvoiceComponent } from './edit-invoice/edit-invoice.component';

const routes: Routes = [
  { path:'listInvoice',component:ListInvoiceComponent},
  { path:'createInvoice',component:AddInvoiceComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
