
import {Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileListComponent } from './profile/profile-list/profile-list.component';
import { ProfileDetailsComponent } from './profile/profile-details/profile-details.component';
import { DefaultComponent } from './layouts/default/default.component';

export const appRoutes: Routes =
[{
    path: '',
    component: DefaultComponent,
    children: [{
      path: '',
      component: LoginComponent
    }, {
      path: 'profilelist',
      component: ProfileListComponent
    }, {
        path: 'profile',
        component: ProfileDetailsComponent
      }]
  }];
