import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Configuration, CacheLocation } from 'msal';
import {
  MsalModule,
  MsalInterceptor,
  MSAL_CONFIG,
  MSAL_CONFIG_ANGULAR,
  MsalService,
  MsalAngularConfiguration
} from '@azure/msal-angular';

import * as config from './app-config.json';

import { appRoutes } from './routes';
import { DefaultModule } from '../app/layouts/default/default.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { AlertifyService } from './_services/alertify.service';
import { AuthInterCeptorProvider } from './_services/auth.interceptor';

// checks if the app is running on IE
export const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

export const protectedResourceMap: [string, string[]][] = [
  [config.resources.myPortalAPi.resourceUri, [config.resources.myPortalAPi.resourceScope]]
];

function MSALConfigFactory(): Configuration {
  return {
    auth: {
      clientId: config.auth.clientId,
      authority: config.auth.authority,
      validateAuthority: true,
      redirectUri: config.auth.redirectUri,
      postLogoutRedirectUri: config.auth.postLogoutRedirectUri,
      navigateToLoginRequestUrl: true,
    },
    cache: {
      cacheLocation: <CacheLocation>config.cache.cacheLocation,
      storeAuthStateInCookie: isIE, // set to true for IE 11
    },
  };
}

function MSALAngularConfigFactory(): MsalAngularConfiguration {
  return {
    popUp: !isIE,
    consentScopes: [
      config.resources.myPortalAPi.resourceScope,
      ...config.scopes.loginRequest
    ],
    unprotectedResources: [],
    protectedResourceMap,
    extraQueryParameters: {}
  };
}

@NgModule({
  declarations: [
      AppComponent,
      NavComponent,
   ],
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
    MsalModule,
  ],
  providers: [
    ErrorInterceptorProvider, 
    AlertifyService, 
    AuthInterCeptorProvider,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    },
    {
      provide: MSAL_CONFIG,
      useFactory: MSALConfigFactory
    },
    {
      provide: MSAL_CONFIG_ANGULAR,
      useFactory: MSALAngularConfigFactory
    },
    MsalService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }