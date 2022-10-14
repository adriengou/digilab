import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormArray,
  Validators,
} from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { Observable, startWith, map } from 'rxjs';
import { UserService } from '../../services/user-service.service';
import { MatDialog } from '@angular/material/dialog';
import { RegisterDialogComponent } from '../register-dialog/register-dialog.component';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  private _registerForm!: FormGroup;
  public _filteredCountries!: undefined | Observable<any>;
  public countryFlag!: string | boolean;
  public dialCode: string = '+00';

  constructor(
    private fb: FormBuilder,
    private countriesService: CountriesService,
    private userService: UserService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      email: ['', Validators.email],
      birthDate: ['', Validators.required],
      dialCode: [this.dialCode, Validators.required],
      phoneNumber: [' ', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      zipCode: ['', Validators.required],
      skills: this.fb.array([this.fb.control('')]),
    });

    this.countriesService.getAllCountries().then((countries: string[]) => {
      this._filteredCountries = this.registerForm
        .get('country')
        ?.valueChanges.pipe(
          startWith(''),
          map((value) => this._filterCountries(countries, value || ''))
          // tap(value=>console.log(value))
        );
    });

    this.registerForm
      .get('country')
      ?.valueChanges.subscribe((value: string) => {
        console.log('value: ' + typeof value);

        this.countriesService.getFlag(value).then((flag) => {
          this.countryFlag = flag || '';
          console.log(this.countryFlag);
        });

        this.countriesService.getDialCode(value).then((dial) => {
          this.registerForm.patchValue({ dialCode: dial });
          console.log(this.dialCode);
        });
      });
  }

  onSubmit(): void {
    let formValues = this.registerForm.getRawValue();
    console.log(formValues);
    let obs = this.userService.sendUser(formValues);
    obs.subscribe((value) => {
      console.log('post response');
      console.log(value);
      this.openDialog('250ms', '250ms', formValues, value);
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

  get skills(): FormArray {
    return this.registerForm.get('skills') as FormArray;
  }

  /**
   */
  addSkill(): void {
    this.skills.push(this.fb.control(''));
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
}

//Directory component
//Formulaire avec les champs suivants: nom, path, id, description
//L'id doit être aléatoire
//Service pour envoyer le formulaire à l'api reqres.in

//weather component
//formulaire avec les champs: pays, ville, code postal, rue
//affiche la météo à l'addresse complete rentrée dans un formulaire
