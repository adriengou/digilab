import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './weather.component';
import {WeatherDialogFormComponent} from "./weather-dialog-form/weather-dialog-form.component";

import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {SharedModule} from "../shared/shared.module";


@NgModule({
    declarations: [
        WeatherComponent,
        WeatherDialogFormComponent
    ],
    exports: [
        WeatherComponent
    ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    MatProgressSpinnerModule,
    SharedModule
  ]
})
export class WeatherModule { }
