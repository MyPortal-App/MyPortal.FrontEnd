import {Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileListComponent } from './profile/profile-list/profile-list.component';
import { ProfileDetailsComponent } from './profile/profile-details/profile-details.component';
import { DefaultComponent } from './layouts/default/default.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { MsalGuard } from '@azure/msal-angular';
import { HomeComponent } from './home/home.component';
// Services 
import { AuthGuardService } from './_services/auth.guard.service';
export const appRoutes: Routes =
[{path: '',
    component: DefaultComponent,
    children: [ {
      path: 'profilelist',
      canActivate: [
        MsalGuard
      ],
      component: ProfileListComponent
    }, {
        path: 'profile',
        canActivate: [
          MsalGuard
        ],
        component: ProfileDetailsComponent
      },{
        path: 'profile/edit',
        canActivate: [
          MsalGuard
        ],
        component: ProfileEditComponent
      }]
     
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }];