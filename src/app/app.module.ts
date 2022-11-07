
import {AgePipe} from './pipes/age-pipe.pipe';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {ChatComponent} from './components/chat/chat.component';
import {CssUrlPipe} from './pipes/css-url.pipe';
import {DirectoriesComponent} from './components/directories/directories.component';
import {DirectoryDialogComponent} from './components/directory-dialog/directory-dialog.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {MainComponent} from './components/main/main.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from "@angular/material/toolbar";
import {NgModule} from '@angular/core';
import {NgxMaskModule} from 'ngx-mask'
import {PhoneCountryFormFieldComponent} from './components/phone-country-form-field/phone-country-form-field.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RegisterDialogComponent} from './components/register-dialog/register-dialog.component';
import {RegisterFormComponent} from './components/register-form/register-form.component';
import {UserComponent} from './components/user/user.component';
import {WeatherComponent} from './components/weather/weather.component';
import {WeatherDialogFormComponent} from './components/weather-dialog-form/weather-dialog-form.component';
import {MatChipsModule} from "@angular/material/chips";
import { UserListComponent } from './components/user-list/user-list.component';
import { UserCardComponent } from './components/user-list/user-card/user-card.component';
import { ChatRoomComponent } from './components/chat-room/chat-room.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {InterceptorService} from "./services/interceptor.service";
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import {environment} from "../environments/environment";
import {Router, RouterModule} from "@angular/router";
import {UserListResolver} from "./resolvers/user-list.resolver";

const config: SocketIoConfig = { url: environment.API_URL, options: {} };

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AgePipe,
    CssUrlPipe,
    LoginFormComponent,
    RegisterFormComponent,
    ChatComponent,
    PhoneCountryFormFieldComponent,
    RegisterDialogComponent,
    DirectoryDialogComponent,
    DirectoriesComponent,
    WeatherDialogFormComponent,
    WeatherComponent,
    MainComponent,
    UserListComponent,
    UserCardComponent,
    ChatRoomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatListModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatDialogModule,
    NgxMaskModule.forRoot(),
    MatIconModule,
    MatProgressSpinnerModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatChipsModule,
    MatSnackBarModule,
    SocketIoModule.forRoot(config),

  ],

  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:InterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
