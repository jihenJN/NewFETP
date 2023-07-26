import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './list-product/list-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { TableProductComponent } from './table-product/table-product.component';


const routes: Routes = [
  { path: 'productList', component:ListProductComponent },
  { path: 'createProduct', component: AddProductComponent },
  { path: 'editProduct/:id', component: EditProductComponent },
  { path: 'table-product', component: TableProductComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
