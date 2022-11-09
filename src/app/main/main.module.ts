import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import {WeatherModule} from "../weather/weather.module";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    WeatherModule,
    SharedModule
  ]
})
export class MainModule { }
