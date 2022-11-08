
import {AgePipe} from './pipes/age-pipe.pipe';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {CssUrlPipe} from './pipes/css-url.pipe';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
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
import {ReactiveFormsModule} from '@angular/forms';
import {MatChipsModule} from "@angular/material/chips";
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
        AgePipe,
        CssUrlPipe,
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
            provide: HTTP_INTERCEPTORS,
            useClass: InterceptorService,
            multi: true
        }
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
