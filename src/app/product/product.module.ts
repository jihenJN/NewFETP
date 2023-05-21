import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPipe } from './search/search.pipe';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
   
    AddProductComponent,
    EditProductComponent,
    ListProductComponent,
    SearchPipe,


    
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
   
    AddProductComponent,
    EditProductComponent,
    ListProductComponent,
    
    
  ]
})
export class ProductModule { 
}
