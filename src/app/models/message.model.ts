import {User} from "./user.model";
import {Room} from "./room.model";

export class Message {
  readonly _id?:string
  userID?:User
  roomID?:Room
  friendID?:User
  date?:string
  content?:string
}
