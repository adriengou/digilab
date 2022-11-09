import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectoriesRoutingModule } from './directories-routing.module';
import { DirectoriesComponent } from './directories.component';
import {DirectoryDialogComponent} from "./directory-dialog/directory-dialog.component";
import {SharedModule} from "../shared/shared.module";
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    DirectoriesComponent,
    DirectoryDialogComponent
  ],
  imports: [
    CommonModule,
    DirectoriesRoutingModule,
    MatDialogModule,
    SharedModule
  ]
})
export class DirectoriesModule { }
