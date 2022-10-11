import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Validator } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { Observable, tap, Subscription, startWith, map } from 'rxjs';
import { UserService } from '../../services/user-service.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  private _registerForm!: FormGroup;
  public _filteredCountries!: undefined | Observable<any>;
  public countryFlag!: string | boolean;
  public dialCode: string | boolean = '+00';

  constructor(
    private fb: FormBuilder,
    private countriesService: CountriesService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      username: [''],
      password: [''],
      confirmPassword: [''],
      email: [''],
      birthDate: [''],
      phoneNumber: [' '],
      street: [''],
      city: [''],
      country: [''],
      zipCode: [''],
      skills: this.fb.array([this.fb.control('')]),
    });

    this.countriesService.getAllCountries().then((countries: string[]) => {
      console.log(countries);
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
          this.dialCode = dial || '';
        });
      });
  }

  onSubmit() {
    let formValues = this.registerForm.getRawValue();
    console.log(formValues);
    let obs = this.userService.sendUser(formValues);
    obs.subscribe((value) => {
      console.log('post response');
      console.log(value);
    });
  }

  public get registerForm(): FormGroup {
    return this._registerForm;
  }
  public set registerForm(value: FormGroup) {
    this._registerForm = value;
  }

  private _filterCountries(countries: string[], value: string): string[] {
    const filterValue = value.toLowerCase();
    return countries.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  public formatPhoneNumber(number: string) {
    let formattedPhoneNumber = '*** *******';

    for (const n of number) {
      formattedPhoneNumber = formattedPhoneNumber.replace('*', n);
    }

    return formattedPhoneNumber;
  }

  get skills(): FormArray {
    return this.registerForm.get('skills') as FormArray;
  }

  addSkill() {
    this.skills.push(this.fb.control(''));
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }
}
