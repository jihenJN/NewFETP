import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './list-product/list-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { SearchPipe } from './search/search.pipe';


const routes: Routes = [
  { path: 'productList', component:ListProductComponent },
  { path: 'createProduct', component: AddProductComponent },
  { path: 'editProduct/:id', component: EditProductComponent },
  // { path: 'searchPipe', component:SearchPipe },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
