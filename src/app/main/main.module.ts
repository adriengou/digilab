import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import {MatListModule} from "@angular/material/list";
import {WeatherModule} from "../weather/weather.module";


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatListModule,
    WeatherModule
  ]
})
export class MainModule { }
