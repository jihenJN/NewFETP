import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { EditInvoiceComponent } from './edit-invoice/edit-invoice.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutInvoiceComponent } from './layout-invoice/layout-invoice.component';
import { NgxPrintModule } from 'ngx-print';
import { PaymentComponent } from './payment/payment.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { TableFilterComponent } from './table-filter/table-filter.component';

// Import PrimeNG modules
import { AvatarModule } from 'primeng/avatar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { AnimateModule } from 'primeng/animate';
import { TableInvoiceComponent } from './table-invoice/table-invoice.component';

@NgModule({
  declarations: [
    AddInvoiceComponent,
    EditInvoiceComponent,
    LayoutInvoiceComponent,
    PaymentComponent,
    TableFilterComponent,
    TableInvoiceComponent,
  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxPrintModule,
    MatStepperModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,

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
    AddInvoiceComponent,
    EditInvoiceComponent,
    LayoutInvoiceComponent,
    PaymentComponent,
    TableFilterComponent,
    TableInvoiceComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class InvoiceModule {}
