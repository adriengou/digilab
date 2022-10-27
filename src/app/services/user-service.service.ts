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

  register(registerValues:User){
    return this.http.post(`${this.apiUrl}/register`, registerValues);
  }

  login(loginValues:any){
    return this.http.post(`${this.apiUrl}/login`, loginValues);
  }


  public get apiUrl(): string {
    return this._apiUrl;
  }
  public set apiUrl(value) {
    this._apiUrl = value;
  }
}
