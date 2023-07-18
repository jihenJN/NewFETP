import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { AddClientComponent } from './add-client/add-client.component';
import { ListClientComponent } from './list-client/list-client.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { TableClientComponent } from './table-client/table-client.component';



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

    AddClientComponent,
    ListClientComponent,
    EditClientComponent,
    TableClientComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    AvatarModule,
    FormsModule,
    ReactiveFormsModule,
    TagModule,
    TableModule,
    MultiSelectModule,
    InputTextModule,
    DropdownModule,
    AnimateModule,
  ],
  exports: [
    TableClientComponent,
    ListClientComponent,
    EditClientComponent,
    AddClientComponent
  ]
})
export class ClientModule { }
