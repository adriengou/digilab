import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Register} from "../models/register.model";
import {Login} from "../models/login.model";

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _apiUrl = 'https://cors-anywhere.herokuapp.com/http://reqres.in/api';

  constructor(private http: HttpClient) {}

  /**
   * Get a list of users from reqres.in
   * @param  {number} page
   * @returns Observable
   */
  getRandomUsers(page: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/users?page=${page}`);
  }

  sendUser(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  register(registerValues:Register){
    return this.http.post(`${this.apiUrl}/register`, registerValues);
  }

  login(loginValues:Login){
    return this.http.post(`${this.apiUrl}/login`, loginValues);
  }


  public get apiUrl(): string {
    return this._apiUrl;
  }
  public set apiUrl(value) {
    this._apiUrl = value;
  }
}
