import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {forkJoin, map, Observable, of} from 'rxjs';
import {UserService} from "../services/user-service.service";
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class ChatResolver implements Resolve<User[]> {
  constructor(private _userService:UserService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot
  ): Observable<any> {
    // return this._userService.getUsersList()
    return forkJoin([
      this._userService.getProfile(),
      this._userService.getUsersList(),
      this._userService.getFriends()
    ]).pipe(
      map((data:any[])=>{
        return {
          profile: data[0],
          users: data[1],
          friends: data[2]
        }
      })
    )
  }
}

