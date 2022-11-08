import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import {DirectoriesComponent} from "./components/directories/directories.component";
import {MainComponent} from "./components/main/main.component";
import {ChatComponent} from "./components/chat/chat.component";
import {RegisterFormComponent} from "./components/register-form/register-form.component";
import {RegisterDialogComponent} from "./components/register-dialog/register-dialog.component";
import {LoginFormComponent} from "./components/login-form/login-form.component";
import {AuthGuard} from "./guards/auth.guard";
import {UserCardComponent} from "./components/user-list/user-card/user-card.component";
import {UserListComponent} from "./components/user-list/user-list.component";
import {WeatherComponent} from "./components/weather/weather.component";
import {ChatRoomComponent} from "./components/chat-room/chat-room.component";
import {UserListResolver} from "./resolvers/user-list.resolver";

const routes: Routes = [

  {
    path:'',
    redirectTo:'/home/chat',
    pathMatch:'full',
  },
  {
    path: 'home',
    component: MainComponent,
    canActivate: [ AuthGuard ],
    children:[
      {
        path: 'directories',
        component: DirectoriesComponent,
        canActivate: [ AuthGuard ]
      },
      {
        path: 'chat',
        component: ChatComponent,
        resolve:{
          userList:UserListResolver
        },
        canActivate: [ AuthGuard ]
      },
    ]
  },
  {
    path: 'directories',
    component: DirectoriesComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'chat',
    component: ChatComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'login',
    component: LoginFormComponent,
  },
  {
    path: 'register',
    component: RegisterFormComponent
  },
  {
    path: 'registerdialog',
    component: RegisterDialogComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'usercard',
    component: UserCardComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'userlist',
    component: UserListComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'weather',
    component: WeatherComponent,
    canActivate: [ AuthGuard ]
  },

  {
    path: 'chatroom',
    component: ChatRoomComponent,
    canActivate: [ AuthGuard ]
  },

  { path: 'chat', loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule) },

  { path: 'directories', loadChildren: () => import('./directories/directories.module').then(m => m.DirectoriesModule) },

  { path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule) },

  { path: 'weather', loadChildren: () => import('./weather/weather.module').then(m => m.WeatherModule) },

  { path: 'login-form', loadChildren: () => import('./login-form/login-form.module').then(m => m.LoginFormModule) },

  { path: 'register-form', loadChildren: () => import('./register-form/register-form.module').then(m => m.RegisterFormModule) },

  { path: 'finder', loadChildren: () => import('./finder/finder.module').then(m => m.FinderModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
