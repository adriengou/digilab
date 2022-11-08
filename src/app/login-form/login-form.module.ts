import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginFormRoutingModule } from './login-form-routing.module';
import { LoginFormComponent } from './login-form.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    LoginFormRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class LoginFormModule { }
