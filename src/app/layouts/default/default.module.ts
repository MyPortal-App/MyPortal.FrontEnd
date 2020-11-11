import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { LoginComponent } from '../../login/login.component';
import { HomeComponent } from '../../home/home.component';
import { ProfileListComponent } from '../../profile/profile-list/profile-list.component';
import { ProfileDetailsComponent } from '../../profile/profile-details/profile-details.component';
import { DefaultComponent } from './default.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [
    DefaultComponent,
    LoginComponent,
    HomeComponent,
    ProfileListComponent,
    ProfileDetailsComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MatSidenavModule
  ]
})
export class DefaultModule { }
