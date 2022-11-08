import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

//Components
import {AuthGuard} from "./guards/auth.guard";
import {UserListResolver} from "./resolvers/user-list.resolver";

const routes: Routes = [


  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule),
  },

  {
    path: 'directories',
    loadChildren: () => import('./directories/directories.module').then(m => m.DirectoriesModule)
  },

  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  },

  {
    path: 'weather',
    loadChildren: () => import('./weather/weather.module').then(m => m.WeatherModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./login-form/login-form.module').then(m => m.LoginFormModule)
  },

  {
    path: 'register',
    loadChildren: () => import('./register-form/register-form.module').then(m => m.RegisterFormModule)
  },

  {
    path: 'finder',
    loadChildren: () => import('./finder/finder.module').then(m => m.FinderModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
