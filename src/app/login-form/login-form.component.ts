import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user-service.service";
import {Login} from "../../models/login.model";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {User} from "../../models/user.model";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  private _loginForm!: FormGroup
  private _user = new User()

  constructor(
    private _fb: FormBuilder,
    private _userService: UserService,
    private _authService: AuthService,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) {

  }

  ngOnInit(): void {
    this.loginForm = this._fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    })
  }

  onSubmit() {
    Object.assign(this._user, this.loginForm.value)
    this._userService.login(this._user).subscribe((response: any) => {
      console.log(response)
      let {headers, status, body} = response

      if (status === 200){
        this.openSnackBar('Login Successful', '', true)
        this._authService.setToken(body.token)

        setTimeout(()=>{
          this._router.navigate(['/'])
        },2000)
      }
    }, (error) =>{
      console.warn(error)
      this.openSnackBar(error.error, '', false)
    })


  }

  get loginForm(): FormGroup {
    return this._loginForm;
  }

  set loginForm(value: FormGroup) {
    this._loginForm = value;
  }

  openSnackBar(message: string, action: string, isValid:boolean) {
    this._snackBar.open(message, action, {
      duration: 3000,
      panelClass: isValid ? 'snackbar-valid' : 'snackbar-invalid'
    })
  }

}
