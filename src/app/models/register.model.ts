export class Register {
  firstName!: string;
  lastName!: string;
  email!: string;
  birthDate!: Date;
  street!: string;
  city!: string;
  zipCode!: number;
  country!: string;//(autocompletion)
  username!: string;
  password!: string;
  confirmPassword!:string
  phoneNumber!: string; //(indicatif et format pays)
  dialCode!:string;
  skills!:string[]

  constructor(
    firstName:string="",
    lastName:string="",
    email:string="",
    birthDate:Date=new Date(),
    street:string="",
    city:string="",
    zipCode:number=0,
    country:string="",
    username:string="",
    password:string="",
    phoneNumber:string="",
    dialCode:string="",
    skills:string[]=[],
    confirmPassword:string=""
  ) {
      this.firstName=firstName
      this.lastName=lastName
      this.email=email
      this.birthDate=birthDate
      this.street=street
      this.city=city
      this.zipCode=zipCode
      this.country=country
      this.username=username
      this.password=password
      this.phoneNumber=phoneNumber
      this.dialCode=dialCode
      this.skills = skills
      this.confirmPassword = confirmPassword
  }
}


