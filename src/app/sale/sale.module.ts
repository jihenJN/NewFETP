import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleRoutingModule } from './sale-routing.module';
import { EditSaleComponent } from './edit-sale/edit-sale.component';
import { ListSaleComponent } from './list-sale/list-sale.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewSaleComponent } from './view-sale/view-sale.component';


@NgModule({
  declarations: [
    EditSaleComponent,
    ListSaleComponent,
    ViewSaleComponent
  ],
  imports: [
    CommonModule,
    SaleRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    EditSaleComponent,
    ListSaleComponent,
    ViewSaleComponent
  ]
})
export class SaleModule { }
