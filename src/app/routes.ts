
import {Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileListComponent } from './profile/profile-list/profile-list.component';
import { ProfileDetailsComponent } from './profile/profile-details/profile-details.component';

export const appRoutes: Routes = [

    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'profilelist', component: ProfileListComponent
    },
    {
        path: 'profile', component: ProfileDetailsComponent
    }
];
