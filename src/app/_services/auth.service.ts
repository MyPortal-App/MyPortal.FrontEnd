import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import {map} from 'rxjs/operators';
import { IUserProfile } from './userProfile';
import { Router } from '@angular/router';
import { BroadcastService, MsalService } from '@azure/msal-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  IsloggedIn: boolean;
  baseUrl = 'https://localhost:44374/api/';
  private currentUserSource = new ReplaySubject<IUserProfile>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor( private router: Router,private http: HttpClient, private authService: MsalService) { }

  login() {
    const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

    if (isIE) {
      this.authService.loginRedirect();
    } else {
      this.authService.loginPopup();
    }
  }

  logout() {
    this.authService.logout();
    localStorage.removeItem('user');
  }
  // setCurrentUser(user:User){
  //   this.currentUserSource.next(user);
  // }
      
  loggedIn() {
    if(this.authService.getAccount())
    {
      if (!this.authService.getAccount().idTokenClaims.isTokenExpired){
        this.IsloggedIn = true;
        return this.IsloggedIn;
      }
      else {
        this.IsloggedIn = false;
        return this.IsloggedIn;
      }
    }
    this.IsloggedIn = false;
    return this.IsloggedIn;
  }

  getToken(): string {
    return JSON.parse(localStorage.getItem('token'));
  }

}
