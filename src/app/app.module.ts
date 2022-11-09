
import {AgePipe} from './pipes/age-pipe.pipe';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {CssUrlPipe} from './pipes/css-url.pipe';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {MatDialogModule} from '@angular/material/dialog';
import {NgModule} from '@angular/core';
import {NgxMaskModule} from 'ngx-mask'
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {InterceptorService} from "./services/interceptor.service";
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import {environment} from "../environments/environment";

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
        MatDialogModule,
        NgxMaskModule.forRoot(),
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
