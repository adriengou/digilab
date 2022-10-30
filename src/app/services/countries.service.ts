import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval, firstValueFrom, from, map } from 'rxjs';
import countries from "../../assets/countries"

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private _countries = countries
  private _apiUrl = "https://gist.githubusercontent.com/adriengou/f690f1019e669fae76713b344dc1ebdb/raw/54c2ed71e9982da055fc664ca607ae9128176119/country.json";


  constructor(private httpClient:HttpClient) {
  }

  /**
   * Get an array of all the countries names
   * @returns Promise
   */
  public getAllCountries():string[]{
    let data = this._countries.map((value:any) => value.name)
    return data;
  }


  /**
   * Get the flag svg url of the country
   * @param  {string} countryName
   * @returns Promise
   */
  public getFlag(countryName:string):string | boolean{
    let data = this._countries.filter((value:any)=>value.name === countryName)
    let flag = data[0].flag
    return flag || false;
  }


  /**
   * Get the dial code of the country
   * @param  {string} countryName
   * @returns Promise
   */
  public getDialCode(countryName:string):string{
    let data = this._countries
    data = data.filter((value:any)=>value.name === countryName)
    let dialCode = data.map((value:any) => value.dial_code)[0]
    return dialCode;
  }
}
