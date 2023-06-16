import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountComponent } from './account/account.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AccountComponent,
  
 
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule


  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    AccountComponent
  ]
})
export class AuthModule { }
