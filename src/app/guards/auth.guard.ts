import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {catchError, map, Observable, of} from 'rxjs';
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _authService:AuthService, private _router:Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this._authService.isAuthenticatedFake().pipe(
      map((response:boolean) => {
        if (response) {
          return true;
        }
        this._router.navigate(['/login']);
        return false;
      }),
      catchError((error) => {
        this._router.navigate(['/login']);
        return of(false);
      })
    );

  }

}
