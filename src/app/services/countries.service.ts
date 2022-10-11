import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval, firstValueFrom, from, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private _countryList!: any;
  private _apiUrl = "https://gist.githubusercontent.com/adriengou/f690f1019e669fae76713b344dc1ebdb/raw/54c2ed71e9982da055fc664ca607ae9128176119/country.json";


  constructor(private httpClient:HttpClient) {
  }

  /**
   * Get the data Json from a gist
   * @returns Promise
   */
  public async getData():Promise<any>{
    let data = (await firstValueFrom(this.httpClient.get(this.apiUrl)))
    return data;
  }


  /**
   * Get an array of all the countries names
   * @returns Promise
   */
  public async getAllCountries():Promise<string[]>{
    let data = await this.getData();
    data = data.map((value:any) => value.name)
    return data;
  }


  /**
   * Get the flag svg url of the country
   * @param  {string} countryName
   * @returns Promise
   */
  public async getFlag(countryName:string):Promise<string | boolean>{
    let data = await this.getData();
    data = data.filter((value:any)=>value.name === countryName)
                .map((value:any) => value.flag)
    return data || false;
  }


  /**
   * Get the dial code of the country
   * @param  {string} countryName
   * @returns Promise
   */
  public async getDialCode(countryName:string):Promise<string | boolean>{
    let data = await this.getData();
    data = data.filter((value:any)=>value.name === countryName)
                .map((value:any) => value.dial_code)
    return data || false;
  }



  public get apiUrl() {
    return this._apiUrl;
  }

  public get countryList(): string[] {
    return this._countryList;
  }
  public set countryList(value: string[]) {
    this._countryList = value;
  }
}
