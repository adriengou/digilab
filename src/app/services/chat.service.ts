import { Injectable } from '@angular/core';
import {ChatUser} from "../models/chat-user.model";

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  chatData = {
    users: []
    messages
  }

  constructor() { }
}
