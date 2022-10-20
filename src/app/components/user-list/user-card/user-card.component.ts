import { Component, OnInit } from '@angular/core';
import {ChatUser} from "../../../models/chat-user.model";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
