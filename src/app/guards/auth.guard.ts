import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad, Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';
import {catchError, map, Observable, of} from 'rxjs';
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private _authService:AuthService, private _router:Router, ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    return this.checkToken()
  }

  canLoad(route: Route, segments: UrlSegment[]):boolean {
    return this.checkToken()
  }

  checkToken(){
    if (this._authService.getToken()){
      return true
    }else{
      this._router.navigate(['/login'])
      return false
    }
  }
}
