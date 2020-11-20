import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BroadcastService, MsalService } from '@azure/msal-angular';
import { Logger, CryptoUtils } from 'msal';
import { AlertifyService } from '../../_services/alertify.service';
import { ProfileService } from '../../_services/profile.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  sideBarOpen = false;
  isIframe = false;
  loggedIn = false;
  constructor(private broadcastService: BroadcastService, 
    private authService: MsalService, 
    private alertifyService: AlertifyService,
    private profileService: ProfileService,
    private router: Router
    ) { }

  ngOnInit() {
    this.isIframe = window !== window.parent && !window.opener;

    this.checkoutAccount();

    this.broadcastService.subscribe('msal:loginSuccess', (payload) => {
      this.checkoutAccount();
      this.alertifyService.success("Succesfully logged in");
      this.router.navigate(['/profile']);
    });
  }

  checkoutAccount() {
    this.loggedIn = !!this.authService.getAccount();
  }


  sideBarToggler(): void {
    this.sideBarOpen = !this.sideBarOpen;
  }

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
}
