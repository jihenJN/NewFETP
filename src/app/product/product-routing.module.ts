import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { TableProductComponent } from './table-product/table-product.component';


const routes: Routes = [
  { path: 'productList', component:TableProductComponent},
  { path: 'createProduct', component: AddProductComponent },
  { path: 'editProduct/:id', component: EditProductComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
