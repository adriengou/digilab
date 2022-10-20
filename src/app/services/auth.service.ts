import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticatedFake():Observable<boolean>{
    let result = sessionStorage.getItem('isLoggedIn') == "true"
    return of(result)
  }

  authenticateFake(){
    sessionStorage.setItem('isLoggedIn', 'true')
  }

  logoutFake(){
    sessionStorage.setItem('isLoggedIn', 'false')
  }
}
