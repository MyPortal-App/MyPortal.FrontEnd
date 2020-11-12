import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { appRoutes } from './routes';
import { DefaultModule } from '../app/layouts/default/default.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { AlertifyService } from './_services/alertify.service';
import { AuthInterCeptorProvider } from './_services/auth.interceptor';

@NgModule({
  declarations: [
      AppComponent,
      NavComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    DefaultModule
  ],
  providers: [ErrorInterceptorProvider, AlertifyService, AuthInterCeptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }