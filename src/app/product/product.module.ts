import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

import { NgxPaginationModule } from 'ngx-pagination';

import { SharedModule } from '../shared/shared.module';
import { TableProductComponent } from './table-product/table-product.component';

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
   
    AddProductComponent,
    EditProductComponent,
   
    TableProductComponent,


    
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    SharedModule,
    AvatarModule,
    TagModule,
    TableModule,
    MultiSelectModule,
    InputTextModule,
    DropdownModule,
    AnimateModule,
    
  ],
  exports: [
   
    AddProductComponent,
    EditProductComponent,
  
    TableProductComponent,
    
    
  ]
})
export class ProductModule { 
}
