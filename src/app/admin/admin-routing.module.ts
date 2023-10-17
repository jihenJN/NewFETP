import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { AddClientComponent } from '../client/add-client/add-client.component';
import { EditClientComponent } from '../client/edit-client/edit-client.component';
import { AddProductComponent } from '../product/add-product/add-product.component';
import { EditProductComponent } from '../product/edit-product/edit-product.component';
import { AccountComponent } from '../auth/account/account.component';
import { AddInvoiceComponent } from '../invoice/add-invoice/add-invoice.component';
import { EditInvoiceComponent } from '../invoice/edit-invoice/edit-invoice.component';
import { ListUserComponent } from '../user/list-user/list-user.component';
import { AddUserComponent } from '../user/add-user/add-user.component';

import { ViewSaleComponent } from '../sale/view-sale/view-sale.component';
import { EditSaleComponent } from '../sale/edit-sale/edit-sale.component';
import { LayoutInvoiceComponent } from '../invoice/layout-invoice/layout-invoice.component';
import { ChartComponent } from '../statistics/chart/chart.component';
import { SettingsComponent } from '../auth/settings/settings.component';
import { TableFilterComponent } from '../invoice/table-filter/table-filter.component';
import { TableClientComponent } from '../client/table-client/table-client.component';
import { TableProductComponent } from '../product/table-product/table-product.component';
import { TableSaleComponent } from '../sale/table-sale/table-sale.component';
import { TableInvoiceComponent } from '../invoice/table-invoice/table-invoice.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardAdminComponent,
    children: [
      { path: '', redirectTo: 'admin', pathMatch: 'full' },

      { path: 'account', component: AccountComponent },
      { path: 'settings', component: SettingsComponent },

      { path: 'productList', component: TableProductComponent },
      { path: 'createProduct', component: AddProductComponent },
      { path: 'editProduct/:id', component: EditProductComponent },

      { path: 'listClient', component: TableClientComponent },
      { path: 'createClient', component: AddClientComponent },
      { path: 'editClient/:id', component: EditClientComponent },

      { path: 'listInvoice', component: TableInvoiceComponent },
      { path: 'createInvoice', component: AddInvoiceComponent },
      { path: 'editInvoice/:id', component: EditInvoiceComponent },
      { path: 'layoutInvoice/:id', component: LayoutInvoiceComponent },
      { path: 'table', component: TableFilterComponent },

      { path: 'listSale', component: TableSaleComponent },
      { path: 'viewSale/:id', component: ViewSaleComponent },
      { path: 'editSale/:id', component: EditSaleComponent },
      { path: 'table-sale', component: TableSaleComponent },

      { path: 'listUser', component: ListUserComponent },
      { path: 'createUser', component: AddUserComponent },

      { path: 'chart', component: ChartComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
