import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import {ChatRoomComponent} from "./chat-room/chat-room.component";
import {UserListComponent} from "./user-list/user-list.component";

import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    ChatComponent,
    ChatRoomComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    SharedModule
  ]
})
export class ChatModule { }
