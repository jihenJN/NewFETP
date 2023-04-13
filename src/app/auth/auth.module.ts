import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountComponent } from './account/account.component';



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
    ReactiveFormsModule


  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    AccountComponent
  ]
})
export class AuthModule { }
