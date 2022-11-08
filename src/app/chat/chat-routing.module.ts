import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat.component';
import {UserListResolver} from "../resolvers/user-list.resolver";

const routes: Routes = [
  {
    path: '',
    component: ChatComponent,
    resolve:{
      userList:UserListResolver
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
