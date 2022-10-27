import {Room} from "./room.model";
import {Message} from "./message.model";

export class User {
  username!: string
  firstName!: string
  lastName!: string
  avatar!: string
  readonly _id?: string
  password?: string
  email?: string
  roomsID?: Room[]
  sentMessagesID?: Message[]
  receivedMessagesID?: Message[]
  isLoggedIn?: boolean
  token?: string
  country?: string
  city?: string
  street?: string
  zipCode?: string
  phoneNumber?: string
  dialCode?: string
  skills?: string[]
  role?: string
  friendsID?:User[]
  confirmPassword?:string
  dateOfBirth?:string | Date


  constructor() {
  }


}
