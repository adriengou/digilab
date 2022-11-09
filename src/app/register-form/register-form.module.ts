import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterFormRoutingModule } from './register-form-routing.module';
import { RegisterFormComponent } from './register-form.component';
import {RegisterDialogComponent} from "./register-dialog/register-dialog.component";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatChipsModule} from "@angular/material/chips";
import {SharedModule} from "../shared/shared.module";
import {NgxMaskModule} from "ngx-mask";


@NgModule({
  declarations: [
    RegisterFormComponent,
    RegisterDialogComponent
  ],
  imports: [
    CommonModule,
    RegisterFormRoutingModule,
    MatAutocompleteModule,
    MatChipsModule,
    SharedModule,
    NgxMaskModule
  ]
})
export class RegisterFormModule { }
