import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from "../models/user.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = `${environment.API_URL}/api/users`;

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

  getUsersList():Observable<any>{
    return this.http.get(`${this.apiUrl}/list`, {observe: 'response'})
  }

  addFriend(friendName:string):Observable<any>{
    return this.http.post(`${this.apiUrl}/addfriend`, {friendName:friendName},{observe: 'response'})
  }

  removeFriend(friendName:string):Observable<any>{
    return this.http.post(`${this.apiUrl}/removefriend`, {friendName:friendName},{observe: 'response'})
  }

  getFriends():Observable<any>{
    return this.http.get(`${this.apiUrl}/friends`,{observe: 'response'})
  }


}
