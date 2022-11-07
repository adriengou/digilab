import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {User} from "../models/user.model";
import {Message} from "../models/message.model";
import {MessageService} from "./message.service";
import {Socket} from "ngx-socket-io";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  contact:Subject<User> = new Subject()
  sentMessage:Subject<Message> = new Subject()
  receivedMessage:Subject<Message> = new Subject()
  loginSuccess = new Subject()
  usersListSubject = new BehaviorSubject([''])

  constructor(private _messageService:MessageService, private _socket:Socket, private _authService:AuthService) {
    this._socket.emit('login', {token:this._authService.getToken()})

    this._socket.on('login success', ()=>{
      this.loginSuccess.next(true)

      this._socket.on('friend message sent', (data:any)=>{
        this.sentMessage.next(data)
      })

      this._socket.on('friend message', (data:any)=>{
        //console.warn("socket", data)
        this.receivedMessage.next(data)
      })

      this._socket.on('error', (error:any)=>{
        console.warn(`ERROR: ${error}`)
      })

      this._socket.on('users list', (data:any)=>{
        console.warn('user list recived: ', data)
        this.usersListSubject.next(data)
      })
    })
  }

  sendFriendMessage(friendName:string="", content:string=""){
    this._socket.emit('send friend message', {friendName, content})
  }

  setChatTarget(user:User){
    this.contact.next(user)
  }

  getChatTarget():Observable<User>{
    return this.contact.asObservable()
  }



}
