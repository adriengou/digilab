import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './components/user/user.component';
import { AgePipe } from './pipes/age-pipe.pipe';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { CssUrlPipe } from './pipes/css-url.pipe';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { ChatComponent } from './components/chat/chat.component';
import { PhoneCountryFormFieldComponent } from './components/phone-country-form-field/phone-country-form-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RegisterDialogComponent } from './components/register-dialog/register-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { NgxMaskModule } from 'ngx-mask'
import {MatIconModule} from '@angular/material/icon';
import { DirectoryDialogComponent } from './components/directory-dialog/directory-dialog.component';
import { DirectoriesComponent } from './components/directories/directories.component';
import { WeatherDialogFormComponent } from './components/weather-dialog-form/weather-dialog-form.component';


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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
