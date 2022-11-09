import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginFormRoutingModule } from './login-form-routing.module';
import { LoginFormComponent } from './login-form.component';
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    LoginFormRoutingModule,
    SharedModule,
  ]
})
export class LoginFormModule { }
