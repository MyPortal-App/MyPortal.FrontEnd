import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { UserProfileListComponent} from './userProfile-list.component';
import { UserProfileDetailComponent } from './userProfile-detail.component';

import { UserProfileDetailGuard } from './userProfile-detail.guard';
import { SharedModule} from '../shared/shared.module'

@NgModule({
    declarations: [
        UserProfileListComponent,
        UserProfileDetailComponent,               
    ],
    imports: [        
        RouterModule.forChild([
            { path: 'userprofiles', component: UserProfileListComponent},
            { 
                path: 'userprofiles/:id',
                canActivate: [UserProfileDetailGuard], 
                component: UserProfileDetailComponent
            },
        ]),
        SharedModule
    ]    
})
export class UserProfileModule {}