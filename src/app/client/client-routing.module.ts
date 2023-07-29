import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './add-client/add-client.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { TableClientComponent } from './table-client/table-client.component';

const routes: Routes = [
  {path:'listClient',component:TableClientComponent},
  {path:'createClient',component:AddClientComponent},
  {path:'editClient/:id',component:EditClientComponent},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
