import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, switchMap, take} from "rxjs";
import {Address} from "../models/address.model";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private _gpsApi = "https://cors-anywhere.herokuapp.com/https://api-adresse.data.gouv.fr/search/"
  private _weatherApi = "https://cors-anywhere.herokuapp.com/https://api.open-meteo.com/v1/forecast/"

  constructor(private _http:HttpClient) { }


  /**
   *
   * @param address
   * @return {Observable<Object>}
   */
  getCoordinatesFromAddress(address:Address):Observable<any>{
    let {city, street, zipCode} = address
    //Create the params for the request
    let gpsQueryParams = new HttpParams()
    gpsQueryParams = gpsQueryParams.append('q' ,`${street} ${zipCode} ${city}`)

    //request to the gps API for latitude and longitude
    return this._http.get(this._gpsApi, {params:gpsQueryParams})
  }


  /**
   *
   * @param latitude
   * @param longitude
   * @return {Observable<Object>}
   */
  getWeatherFromCoordinates(latitude:string, longitude:string): Observable<any>{
    //Create the params for the request
    let weatherQueryParams = new HttpParams()
    weatherQueryParams = weatherQueryParams.append('latitude', latitude)
    weatherQueryParams = weatherQueryParams.append('longitude', longitude)
    weatherQueryParams = weatherQueryParams.append('hourly', 'temperature_2m')
    weatherQueryParams = weatherQueryParams.append('timezone', 'Europe/Berlin')




    //request to the weather API for weather data
    return this._http.get(this._weatherApi, {params:weatherQueryParams})
  }

  /**
   *
   * @param address
   */
  getWeather(address:Address):Observable<any>{
    return this.getCoordinatesFromAddress(address).pipe(
      //take(1),
      switchMap((gpsResponse:any)=>{
        let [longitude, latitude] = gpsResponse.features[0].geometry.coordinates
        return this.getWeatherFromCoordinates(latitude, longitude)
      })
    )
  }
}
