import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './invoice/list/list.component';
import { CreateComponent } from './product/create/create.component';
import { HomeComponent } from './product/home/home.component';


const routes: Routes = [
  {path:'',component:ListComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
