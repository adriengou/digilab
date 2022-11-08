import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import {ChatRoomComponent} from "./chat-room/chat-room.component";
import {UserListComponent} from "./user-list/user-list.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    ChatComponent,
    ChatRoomComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
  ]
})
export class ChatModule { }
