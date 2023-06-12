import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { EditInvoiceComponent } from './edit-invoice/edit-invoice.component';
import { ListInvoiceComponent } from './list-invoice/list-invoice.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutInvoiceComponent } from './layout-invoice/layout-invoice.component';
import {NgxPrintModule} from 'ngx-print';
import { PaymentComponent } from './payment/payment.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';


@NgModule({
  declarations: [
    
    AddInvoiceComponent,
    EditInvoiceComponent,
    ListInvoiceComponent,
    LayoutInvoiceComponent,
    PaymentComponent
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

    
  ],
  exports: [
   
    AddInvoiceComponent,
    EditInvoiceComponent,
    ListInvoiceComponent,
    LayoutInvoiceComponent,
    PaymentComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],

})
export class InvoiceModule { }
