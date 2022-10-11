export class User {
  private _fisrtName!: string;
  private _lastName!: string;
  private _email!: string;
  private _birthDate!: Date;
  private _street!: string;
  private _city!: string;
  private _zipCode!: number;
  private _country!: string;//(autocompletion)
  private _username!: string;
  private _password!: string;
  private _phonNumber!: string; //(indicatif et format pays)

  constructor(){}

  public get phonNumber(): string {
    return this._phonNumber;
  }
  public set phonNumber(value: string) {
    this._phonNumber = value;
  }


  public get password(): string {
    return this._password;
  }
  public set password(value: string) {
    this._password = value;
  }

  public get username(): string {
    return this._username;
  }
  public set username(value: string) {
    this._username = value;
  }

  public get country(): string {
    return this._country;
  }
  public set country(value: string) {
    this._country = value;
  }

  public get zipCode(): number {
    return this._zipCode;
  }
  public set zipCode(value: number) {
    this._zipCode = value;
  }

  public get fisrtName(): string {
    return this._fisrtName;
  }

  public set fisrtName(value: string) {
    this._fisrtName = value;
  }

  public get lastName(): string {
    return this._lastName;
  }
  public set lastName(value: string) {
    this._lastName = value;
  }

  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }

  public get birthDate(): Date {
    return this._birthDate;
  }
  public set birthDate(value: Date) {
    this._birthDate = value;
  }

  public get street(): string {
    return this._street;
  }
  public set street(value: string) {
    this._street = value;
  }

  public get city(): string {
    return this._city;
  }
  public set city(value: string) {
    this._city = value;
  }
}
