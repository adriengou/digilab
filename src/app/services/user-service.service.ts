import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _apiUrl = 'http://reqres.in/api';

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

  public get apiUrl(): string {
    return this._apiUrl;
  }
  public set apiUrl(value) {
    this._apiUrl = value;
  }
}
