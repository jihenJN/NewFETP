import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    SpinnerComponent,
  

  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule
    
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    SpinnerComponent,
    
  ]
})
export class SharedModule { }
