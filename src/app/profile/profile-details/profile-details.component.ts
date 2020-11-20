import { Component, OnInit } from '@angular/core';
import { IUserProfile } from 'src/app/interfaces/userProfile';
import { BroadcastService, MsalService } from '@azure/msal-angular';
import { Logger, CryptoUtils } from 'msal';
import { AlertifyService } from '../../_services/alertify.service';
import { ProfileService } from '../../_services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'pm-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {
  pageTitle = 'Welcome';
  errorMessage = '';
  userProfile: IUserProfile | undefined;
  id: any = 1;
  user: any;
  sideBarOpen = false;
  isIframe = false;
  loggedIn = false;
  constructor(private userProfileService: ProfileService,
    private broadcastService: BroadcastService, 
    private authService: MsalService, 
    private alertifyService: AlertifyService,
    private profileService: ProfileService,
    ) {
  }

  ngOnInit(): void {
    // This needs to be commented out when we change the redirect url to profile

    
    // this.isIframe = window !== window.parent && !window.opener;

    // this.checkoutAccount();

    // this.broadcastService.subscribe('msal:loginSuccess', (payload) => {
    //   this.checkoutAccount();
    //   this.alertifyService.success("Succesfully logged in");
    // });

    // this.broadcastService.subscribe('msal:loginFailure', (payload) => {
    //   console.log(payload);
    //   this.alertifyService.error("Login attempt failed");
    //   console.log('login failed');
    // });

    // this.authService.handleRedirectCallback((authError, response) => {
    //   if (authError) {
    //     console.error('Redirect Error: ', authError.errorMessage);
    //     return;
    //   }

    //   console.log('Redirect Success: ', response.accessToken);
    // });

    // this.authService.setLogger(new Logger((logLevel, message, piiEnabled) => {
    //   console.log('MSAL Logging: ', message);
    // }, {
    //   correlationId: CryptoUtils.createNewGuid(),
    //   piiLoggingEnabled: false
    // }));

    // This must use either email, sub or oid to get the user from the id_token
    console.log(this.authService.getAccount());
    // const email = this.authService.getAccount().userName;
    // const oid = this.authService.getAccount().idTokenClaims.oid;
    // const sub = this.authService.getAccount().idTokenClaims.sub;
    this.setUserProfile(this.id);
  }

  checkoutAccount() {
    this.loggedIn = !!this.authService.getAccount();
  }
  
  setUserProfile(id: number): void {
      this.profileService.getUserProfile(id).subscribe({
        next: user => {
          if(user){
            this.userProfile = {
              'token': '',
              'user': user
            }
            localStorage.setItem('user', JSON.stringify(this.userProfile));
          }
        },
        error: error => {
          this.alertifyService.error(error);
        }
      }
    );
  }
  onBack(): void {
    // this.router.navigate(['/userprofiles']);
  }
}
