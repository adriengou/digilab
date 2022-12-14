import {Component, OnInit} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormArray,
  Validators, FormControl,
} from '@angular/forms';
import {CountriesService} from '../services/countries.service';
import {Observable, startWith, map} from 'rxjs';
import {UserService} from '../services/user-service.service';
import {MatDialog} from '@angular/material/dialog';
import {RegisterDialogComponent} from './register-dialog/register-dialog.component';
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {MatChipInputEvent} from "@angular/material/chips";
import {Register} from "../models/register.model";
import {MatSnackBar} from "@angular/material/snack-bar";
import {User} from "../models/user.model";
import {ControlsOf} from "../helpers/types/controls-of";
import {Room} from "../models/room.model";
import {Message} from "../models/message.model";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {

  private _user = new User()
  public _filteredCountries!: undefined | Observable<any>;
  public countryFlag!: string | boolean;
  public dialCode: string = '+00';
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  private _registerForm!: FormGroup

  constructor(
    private fb: FormBuilder,
    private countriesService: CountriesService,
    private userService: UserService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private _authService: AuthService,
    private _router: Router
  ) {
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: [this._user.firstName, Validators.required],
      lastName: [this._user.lastName, Validators.required],
      username: [this._user.username, Validators.required],
      password: [this._user.password, Validators.required],
      confirmPassword: [this._user.confirmPassword, Validators.required],
      email: [this._user.email, Validators.email],
      dateOfBirth: [this._user.dateOfBirth, Validators.required],
      dialCode: [this._user.dialCode, Validators.required],
      phoneNumber: [this._user.phoneNumber, Validators.required],
      street: [this._user.street, Validators.required],
      city: [this._user.city, Validators.required],
      country: [this._user.country, Validators.required],
      zipCode: [this._user.zipCode, Validators.required],
      skills: this.fb.array([]),
    });
    let countries = this.countriesService.getAllCountries()
    this._filteredCountries = this.registerForm
      .get('country')
      ?.valueChanges.pipe(
        startWith(''),
        map((value) => this._filterCountries(countries, value || ''))
        // tap(value=>console.log(value))
      );

    this.registerForm
      .get('country')
      ?.valueChanges.subscribe((value: string) => {
      console.log('value: ' + typeof value);

      this.countryFlag = this.countriesService.getFlag(value)
      let dial = this.countriesService.getDialCode(value)
      this.registerForm.patchValue({dialCode: dial});
    });
  }

  onSubmit(): void {
    Object.assign(this._user, this.registerForm.value)

    let {password, confirmPassword} = this._user
    if (password !== confirmPassword) {
      this.openSnackBar('Password and confirmed password do not match !', '', false)
      return
    }


    console.log(this._user);
    this.userService.register(this._user).subscribe((response) => {
      let {headers, status, body} = response
      console.log(response)
      this._authService.setToken(body.token)

      this.openSnackBar('Account created !', '', true)

      setTimeout(() => {
        this._router.navigate(['/'])
      }, 2000)
    });
  }

  public get registerForm(): FormGroup {
    return this._registerForm;
  }

  public set registerForm(value: FormGroup) {
    this._registerForm = value;
  }


  /**
   *
   * @param {string[]} countries
   * @param {string} value
   * @returns {string[]}
   * @private
   */
  private _filterCountries(countries: string[], value: string): string[] {
    const filterValue = value.toLowerCase();
    return countries.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }


  /**
   *
   */
  get skills(): FormArray {
    return this.registerForm.get('skills') as FormArray;
  }

  /**
   */
  addSkill(event: MatChipInputEvent): void {
    const value = (event.value || '').trim()

    if (value) {
      this.skills.push(this.fb.control(value));
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  /**
   * @param  {number} index
   */
  removeSkill(index: number): void {
    this.skills.removeAt(index);
  }

  /**
   * @param  {string} enterAnimationDuration
   * @param  {string} exitAnimationDuration
   * @param  {any} formValues
   * @param  {any} response
   */
  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    formValues: any,
    response: any
  ): void {
    this.dialog.open(RegisterDialogComponent, {
      width: '600px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        formValues,
        response,
      },
    });
  }

  /**
   * Check if the 2 passwords fields have the same value
   * @returns boolean
   */
  validateForm(): boolean {
    let password = this.registerForm.get('password')?.value;
    let confirmPassword = this.registerForm.get('confirmPassword')?.value;
    return password === confirmPassword && !this.registerForm.invalid;
  }

  openSnackBar(message: string, action: string, isValid: boolean) {
    this._snackBar.open(message, action, {
      duration: 3000,
      panelClass: isValid ? 'snackbar-valid' : 'snackbar-invalid'
    })
  }
}

//Directory component
//Formulaire avec les champs suivants: nom, path, id, description
//L'id doit ??tre al??atoire
//Service pour envoyer le formulaire ?? l'api reqres.in

//weather component
//formulaire avec les champs: pays, ville, code postal, rue
//affiche la m??t??o ?? l'addresse complete rentr??e dans un formulaire
