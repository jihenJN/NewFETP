import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { AddClientComponent } from './add-client/add-client.component';

import { EditClientComponent } from './edit-client/edit-client.component';

// Import PrimeNG modules
import { TableClientComponent } from './table-client/table-client.component';
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
    EditClientComponent,
    AddClientComponent
  ]
})
export class ClientModule { }
