import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectoriesRoutingModule } from './directories-routing.module';
import { DirectoriesComponent } from './directories.component';
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {DirectoryDialogComponent} from "./directory-dialog/directory-dialog.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";


@NgModule({
  declarations: [
    DirectoriesComponent,
    DirectoryDialogComponent
  ],
  imports: [
    CommonModule,
    DirectoriesRoutingModule,
    MatListModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ]
})
export class DirectoriesModule { }
