import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../services/user-service.service";
import {User} from "../models/user.model";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  profile!:User
  users!:User[]
  friends!:User[]

  constructor(private _activatedRoute:ActivatedRoute,
              private _userService:UserService,
              ) { }

  ngOnInit(): void {
    this._activatedRoute.data.subscribe(({chatData})=>{
      console.warn("resolver subscribe: ", chatData)
      this.users = chatData.users.body
      this.profile = chatData.profile.body
      this.friends = chatData.friends.body
    })
  }

}
