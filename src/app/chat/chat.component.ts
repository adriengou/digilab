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

  users!:User[]

  constructor(private _activatedRoute:ActivatedRoute,
              private _userService:UserService,
              ) { }

  ngOnInit(): void {
    this._activatedRoute.data.subscribe(({userList})=>{
      console.warn("resolver subscribe: ", userList)
      this.users = userList.body
    })
  }

}
