import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { SharedModule } from '../shared/shared.module';
import { ClientModule } from '../client/client.module';
import { ProductModule } from '../product/product.module';
import { AuthModule } from '../auth/auth.module';
import { InvoiceModule } from '../invoice/invoice.module';
import { UserModule } from '../user/user.module';


@NgModule({
  declarations: [
    DashboardAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ClientModule,
    ProductModule,
    InvoiceModule,
    UserModule,
    AuthModule
  ],
  exports: [
    DashboardAdminComponent
  ]
})
export class AdminModule { }
