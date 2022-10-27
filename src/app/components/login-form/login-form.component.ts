import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user-service.service";
import {Login} from "../../models/login.model";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {User} from "../../models/user.model";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  private _loginForm!:FormGroup
  private _user = new User()

  constructor(private _fb:FormBuilder,
              private _userService:UserService,
              private _authService:AuthService,
              private _router:Router,
  ) {

  }

  ngOnInit(): void {
    this.loginForm = this._fb.group({
      email:['', Validators.email],
      password:['', Validators.required]
    })
  }

  onSubmit(){
    let login = this.loginForm.value
    this._userService.login(login).subscribe((response:any)=>{
      console.log(response)
      this._authService.authenticateFake();
      this._router.navigate(['/'])
      //setTimeout(()=>{
      //  this._authService.logoutFake()
      //  console.log(sessionStorage.getItem('isLoggedIn'))
      //}, 1*60*1000)
    })
  }

  get loginForm(): FormGroup {
    return this._loginForm;
  }

  set loginForm(value: FormGroup) {
    this._loginForm = value;
  }

}
