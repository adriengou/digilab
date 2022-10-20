export class Address {


  private _city!:string
  private _zipCode!:number
  private _street!:string


  constructor(city:string, zipCode:number, street:string) {
    this.city = city
    this.zipCode = zipCode
    this.street = street
  }

  get city(): string {
    return this._city;
  }

  set city(value: string) {
    this._city = value;
  }

  get zipCode(): number {
    return this._zipCode;
  }

  set zipCode(value: number) {
    this._zipCode = value;
  }

  get street(): string {
    return this._street;
  }

  set street(value: string) {
    this._street = value;
  }
}
