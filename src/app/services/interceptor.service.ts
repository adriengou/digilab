import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {catchError, Observable, throwError} from "rxjs";
import {environment} from "../../environments/environment";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  token!: string

  constructor(private _authService: AuthService, private _snackbar:MatSnackBar) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.token = this._authService.getToken()

    if (this.token) {
      console.warn(req.url, '--------------------------------')

      const tokenizedReq = req.url.includes(`${environment.API_URL}/api`)
        ? req.clone({
          headers: req.headers.set('authorization', `Bearer ${this.token}`)
        })
        : req
      if (req.url.includes(`${environment.API_URL}/api`)){
        return next.handle(tokenizedReq).pipe(
          catchError((error:HttpErrorResponse)=>{
            let message = ""
            switch (error.status) {
              case 400:
                message = "Bad request"
                break

              case 401:
                message = "Unauthorized"
                break
            }

            this._snackbar.open(message, 'ok', {
              panelClass:'snackbar-invalid'
            })

            return next.handle(tokenizedReq)
          })
        )
      }
    }
    return next.handle(req)
  }
}
