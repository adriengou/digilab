import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './weather.component';
import {WeatherDialogFormComponent} from "./weather-dialog-form/weather-dialog-form.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";


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
    ReactiveFormsModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class WeatherModule { }
