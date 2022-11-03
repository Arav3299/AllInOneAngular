import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { PageComponent } from './page/page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,ReactiveFormsModule
  ]
})
export class LoginModule { }
