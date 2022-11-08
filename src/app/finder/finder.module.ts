import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinderRoutingModule } from './finder-routing.module';
import { FinderComponent } from './finder.component';


@NgModule({
  declarations: [
    FinderComponent
  ],
  imports: [
    CommonModule,
    FinderRoutingModule
  ]
})
export class FinderModule { }
