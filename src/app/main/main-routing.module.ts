import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import {ChatComponent} from "../chat/chat.component";
import {ChatResolver} from "../resolvers/chat.resolver";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children:[
      {
        path:'chat',
        component: ChatComponent,
        resolve:{
          chatData:ChatResolver
        },
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
