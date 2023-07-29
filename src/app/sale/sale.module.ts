import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleRoutingModule } from './sale-routing.module';
import { EditSaleComponent } from './edit-sale/edit-sale.component';
import { ListSaleComponent } from './list-sale/list-sale.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewSaleComponent } from './view-sale/view-sale.component';
import { TableSaleComponent } from './table-sale/table-sale.component';

// Import PrimeNG modules

import { AvatarModule } from 'primeng/avatar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { AnimateModule } from 'primeng/animate';

@NgModule({
  declarations: [
    EditSaleComponent,
    ListSaleComponent,
    ViewSaleComponent,
    TableSaleComponent
  ],
  imports: [
    CommonModule,
    SaleRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
   
    AvatarModule,
    TagModule,
    TableModule,
    MultiSelectModule,
    InputTextModule,
    DropdownModule,
    AnimateModule,
  ],
  exports: [
    EditSaleComponent,
    ListSaleComponent,
    ViewSaleComponent,
    TableSaleComponent
  ]
})
export class SaleModule { }
