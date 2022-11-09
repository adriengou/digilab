import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

//Components
import {AuthGuard} from "./guards/auth.guard";
import {ChatResolver} from "./resolvers/chat.resolver";

const routes: Routes = [

  {
    path:'',
    redirectTo:'/main/chat',
    pathMatch:'full'
  },

  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule),
    canActivate:[AuthGuard],
    canLoad:[AuthGuard]
  },

  {
    path: 'directories',
    loadChildren: () => import('./directories/directories.module').then(m => m.DirectoriesModule),
    canActivate:[AuthGuard],
    canLoad:[AuthGuard]
  },

  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule),
    canActivate:[AuthGuard],
    canLoad:[AuthGuard]
  },

  {
    path: 'weather',
    loadChildren: () => import('./weather/weather.module').then(m => m.WeatherModule),
    canActivate:[AuthGuard],
    canLoad:[AuthGuard]
  },

  {
    path: 'login',
    loadChildren: () => import('./login-form/login-form.module').then(m => m.LoginFormModule),
  },

  {
    path: 'register',
    loadChildren: () => import('./register-form/register-form.module').then(m => m.RegisterFormModule),
  },

  {
    path: 'finder',
    loadChildren: () => import('./finder/finder.module').then(m => m.FinderModule),
    canActivate:[AuthGuard],
    canLoad:[AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
