import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';

import { ListClientComponent } from '../client/list-client/list-client.component';
import { AddClientComponent } from '../client/add-client/add-client.component';
import { EditClientComponent } from '../client/edit-client/edit-client.component';
import { ListProductComponent } from '../product/list-product/list-product.component';
import { AddProductComponent } from '../product/add-product/add-product.component';
import { EditProductComponent } from '../product/edit-product/edit-product.component';
import { AccountComponent } from '../auth/account/account.component';
import { ListInvoiceComponent } from '../invoice/list-invoice/list-invoice.component';
import { AddInvoiceComponent } from '../invoice/add-invoice/add-invoice.component';
import { EditInvoiceComponent } from '../invoice/edit-invoice/edit-invoice.component';
import { ListUserComponent } from '../user/list-user/list-user.component';
import { AddUserComponent } from '../user/add-user/add-user.component';
import { ListSaleComponent } from '../sale/list-sale/list-sale.component';
import { ViewSaleComponent } from '../sale/view-sale/view-sale.component';
import { EditSaleComponent } from '../sale/edit-sale/edit-sale.component';
import { LayoutInvoiceComponent } from '../invoice/layout-invoice/layout-invoice.component';
import { ChartComponent } from '../statistics/chart/chart.component';
import { SettingsComponent } from '../auth/settings/settings.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardAdminComponent,
    children: [
      { path: '', redirectTo: 'admin', pathMatch: 'full' },
     
      { path: 'account', component:AccountComponent},
      {path:'settings', component:SettingsComponent},

      { path: 'productList', component:ListProductComponent },
      { path: 'createProduct', component: AddProductComponent },
      { path: 'editProduct/:id', component: EditProductComponent },
      
      { path:'listClient',component:ListClientComponent},
      { path:'createClient',component:AddClientComponent},
      { path:'editClient/:id',component:EditClientComponent},


      { path:'listInvoice',component:ListInvoiceComponent},
      { path:'createInvoice',component:AddInvoiceComponent},
      { path:'editInvoice/:id',component:EditInvoiceComponent},
      { path:'layoutInvoice/:id',component:LayoutInvoiceComponent},


       
      { path:'listSale',component:ListSaleComponent},
      { path:'viewSale/:id',component:ViewSaleComponent},
      { path:'editSale/:id',component:EditSaleComponent},

     
      { path:'listUser',component:ListUserComponent},
      { path:'createUser',component:AddUserComponent},

      { path:'chart',component:ChartComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
