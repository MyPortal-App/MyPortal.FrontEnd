// Angular
import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
} from '@angular/router';
import { BroadcastService, MsalService } from '@azure/msal-angular';

// TIS services
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService, private smalService: MsalService) {}

  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      return true;
    }
    this.authService.login();
    return false;
  }
}
