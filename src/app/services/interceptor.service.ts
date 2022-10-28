import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{
  token!: string

  constructor(private _authService:AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.token = this._authService.getToken()

    if (this.token){
      const tokenizedReq = req.clone({
        headers: req.headers.set('authorization', `Bearer ${this.token}`)

      })
      return next.handle(tokenizedReq)
    }
    return next.handle(req);
  }
}
