import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {WeatherService} from "../../services/weather.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Address} from "../../models/address.model";

@Component({
  selector: 'app-weather-dialog-form',
  templateUrl: './weather-dialog-form.component.html',
  styleUrls: ['./weather-dialog-form.component.scss']
})
export class WeatherDialogFormComponent implements OnInit {


  weatherForm!: FormGroup
  private _showSpinner = false

  constructor(private _weatherService:WeatherService, private _fb:FormBuilder, @Inject(MAT_DIALOG_DATA) private data:any, private _dialogRef:MatDialogRef<any>) { }

  ngOnInit(): void {
    this.weatherForm = this._fb.group({
      city: [this.data.city, Validators.required],
      zipCode:[this.data.zipCode, Validators.required],
      street: [this.data.street, Validators.required]
    })
  }


  /**
   *
   */
  onSubmit(){
    let { city, zipCode, street } = this.weatherForm.value;
    let address = new Address(city, zipCode, street)

    //show spinner
    this.showSpinner = true

    //call to weather service
    this._weatherService.getWeather(address).subscribe((response:any)=>{
      console.log(response)
      this._dialogRef.close({
        address:new Address(city, zipCode, street),
        response:response
      })
    })
  }


  /**
   *
   * @return {boolean}
   */
  get showSpinner(): boolean {
    return this._showSpinner;
  }


  /**
   *
   * @param value
   */
  set showSpinner(value: boolean) {
    this._showSpinner = value;
  }
}
