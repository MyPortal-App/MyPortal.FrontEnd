import {Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileListComponent } from './profile/profile-list/profile-list.component';
import { ProfileDetailsComponent } from './profile/profile-details/profile-details.component';
import { DefaultComponent } from './layouts/default/default.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';

// Services 
import { AuthGuardService } from './_services/auth.guard.service';

export const appRoutes: Routes =
[{
    path: '',
    component: DefaultComponent,
    // canActivate: [AuthGuardService],
    children: [ {
      path: 'profilelist',
      component: ProfileListComponent
    }, {
        path: 'profile',
        component: ProfileDetailsComponent
      },{
        path: 'profile/edit',
        component: ProfileEditComponent
      }]
     
  },
  {
    path: 'login',
    component: LoginComponent
  }];