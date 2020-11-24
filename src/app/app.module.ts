import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

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
      NavComponent,
   ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    DefaultModule,
  ],
  providers: [ErrorInterceptorProvider, AlertifyService, AuthInterCeptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule { }