import { Component, OnInit } from '@angular/core';
import {Address} from "../models/address.model";
import {MatDialog} from "@angular/material/dialog";
import {WeatherDialogFormComponent} from "./weather-dialog-form/weather-dialog-form.component";
import {HttpClient} from "@angular/common/http";
import {WeatherService} from "../services/weather.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  private _address = new Address('Annemasse', 74100, '11 rue paul bert')
  private _hour!:number
  private _temperature!:number

  constructor(private _matDialog: MatDialog, private weatherService:WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getWeather(this.address).subscribe((response:any)=>{
      this.changeWeather(response.hourly.temperature_2m)
    })
  }

  openNewAddress():void{
    let dialogRef = this._matDialog.open(WeatherDialogFormComponent, {data:this.address})

    dialogRef.afterClosed().subscribe((responseFromModal:any)=>{
      console.log(responseFromModal)
      this.address = responseFromModal.address

      this.changeWeather(responseFromModal.response.hourly.temperature_2m)
    })
  }

  changeWeather(temperatures:any[]){
    //Get the current hour
    this.hour = (new Date()).getHours()

    //get the temperature
    this.temperature = temperatures[this.hour]
  }

  get address(): Address {
    return this._address;
  }

  set address(value: Address) {
    this._address = value;
  }

  get temperature(): number {
    return this._temperature;
  }

  set temperature(value: number) {
    this._temperature = value;
  }

  get hour(): number {
    return this._hour;
  }

  set hour(value: number) {
    this._hour = value;
  }

}
