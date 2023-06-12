import { NgModule, Renderer2 } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoiceModule } from './invoice/invoice.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductModule } from './product/product.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { ClientModule } from './client/client.module';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { ZonedDateTimeInterceptorProviders } from './_helpers/ZonedDateTime.interceptor';
import {NgxPrintModule} from 'ngx-print';
import { MatTabsModule } from '@angular/material/tabs';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ProductModule,
    HttpClientModule,
    InvoiceModule,
    AdminModule,
    AuthModule,
    ClientModule,
    NgxPrintModule,
    MatTabsModule,
    NgxPaginationModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,

  ],
  providers: [authInterceptorProviders,ZonedDateTimeInterceptorProviders],
  bootstrap: [AppComponent],

})
export class AppModule { }
