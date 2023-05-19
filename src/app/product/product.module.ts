import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../shared/shared.module';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { NgxPaginationModule } from 'ngx-pagination';




@NgModule({
  declarations: [
   
    AddProductComponent,
    EditProductComponent,
    ListProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    NgxPaginationModule
  ],
  exports: [
   
    AddProductComponent,
    EditProductComponent,
    ListProductComponent
  ]
})
export class ProductModule { }
