import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {UserService} from "../services/user-service.service";
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserListResolver implements Resolve<User[]> {
  constructor(private _userService:UserService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot
  ): Observable<User[]> {
    return this._userService.getUsersList()
  }
}
