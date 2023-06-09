import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountComponent } from './account/account.component';
import { HttpClientModule } from '@angular/common/http';
import { SettingsComponent } from './settings/settings.component';
import { SharedModule } from '../shared/shared.module';
import { PasswordResetInitComponent } from './password-reset/password-reset-init/password-reset-init.component';
import { PasswordResetFinishComponent } from './password-reset/password-reset-finish/password-reset-finish.component';
import { PasswordStrengthComponent } from './password-strength/password-strength.component';




@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AccountComponent,
    SettingsComponent,
    PasswordResetInitComponent,
    PasswordResetFinishComponent,
    PasswordStrengthComponent
    
    
  
 
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule


  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    AccountComponent,
    SettingsComponent,
    PasswordResetInitComponent,
    PasswordResetFinishComponent,
    PasswordStrengthComponent,
   
  ]
})
export class AuthModule { }
