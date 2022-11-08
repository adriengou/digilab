import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterFormRoutingModule } from './register-form-routing.module';
import { RegisterFormComponent } from './register-form.component';
import {RegisterDialogComponent} from "./register-dialog/register-dialog.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    RegisterFormComponent,
    RegisterDialogComponent
  ],
  imports: [
    CommonModule,
    RegisterFormRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class RegisterFormModule { }
