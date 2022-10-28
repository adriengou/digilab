import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  setToken(token:string){
    localStorage.setItem('token', token)
  }

  getToken():any{
    return localStorage.getItem('token') || false
  }
}
