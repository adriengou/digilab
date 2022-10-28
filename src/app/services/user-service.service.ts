import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from "../models/user.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _apiUrl = `${environment.API_URL}:${environment.API_PORT}/api/users`;

  constructor(private http: HttpClient) {}


  register(registerValues:User):Observable<any>{
    return this.http.post(`${this.apiUrl}/register`, registerValues, {observe: 'response'});
  }

  login(loginValues:any):Observable<any>{
    return this.http.post(`${this.apiUrl}/login`, loginValues, {observe: 'response'});
  }

  getProfile():Observable<any>{
    return this.http.get(`${this.apiUrl}/profile`,{observe: 'response'})
  }

  public get apiUrl(): string {
    return this._apiUrl;
  }
  public set apiUrl(value) {
    this._apiUrl = value;
  }
}
