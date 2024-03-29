import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { EditInvoiceComponent } from './edit-invoice/edit-invoice.component';
import { LayoutInvoiceComponent } from './layout-invoice/layout-invoice.component';
import { PaymentComponent } from './payment/payment.component';
import { TableFilterComponent } from './table-filter/table-filter.component';
import { TableInvoiceComponent } from './table-invoice/table-invoice.component';

const routes: Routes = [
  { path: 'listInvoice', component: TableInvoiceComponent },
  { path: 'createInvoice', component: AddInvoiceComponent },
  { path: 'editInvoice/:id', component: EditInvoiceComponent },
  { path: 'layoutInvoice/:id', component: LayoutInvoiceComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'table', component: TableFilterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoiceRoutingModule {}
