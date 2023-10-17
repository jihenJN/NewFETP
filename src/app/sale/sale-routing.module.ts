import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditSaleComponent } from './edit-sale/edit-sale.component';
import { ViewSaleComponent } from './view-sale/view-sale.component';
import { TableSaleComponent } from './table-sale/table-sale.component';

const routes: Routes = [
  { path: 'listSale', component: TableSaleComponent },
  { path: 'editSale/:id', component: EditSaleComponent },
  { path: 'viewSale/:id', component: ViewSaleComponent },
  { path: 'table-sale', component: TableSaleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaleRoutingModule {}
