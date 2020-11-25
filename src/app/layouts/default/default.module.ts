import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { ProfileEditComponent } from '../../profile/profile-edit/profile-edit.component';
import { DefaultComponent } from './default.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule} from '@angular/material/menu';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EditModeDirective } from 'src/app/profile/profile-details/editable/edit-mode.directive';
import { ViewModeDirective } from 'src/app/profile/profile-details/editable/view-mode.directive';
import { EditableOnEnterDirective } from 'src/app/profile/profile-details/editable/editable-on-enter.directive';
import { FocusableDirective } from 'src/app/shared/directives/focusable.directive';
import { EditableComponent } from 'src/app/profile/profile-details/editable/editable.component';
@NgModule({
  declarations: [
    DefaultComponent,
    LoginComponent,
    HomeComponent,
    ProfileListComponent,
    ProfileDetailsComponent,
    ProfileEditComponent,
    EditModeDirective,
    ViewModeDirective,
    EditableOnEnterDirective,
    FocusableDirective,
    FocusableDirective,
    EditableComponent
  ],
  exports: [
    DefaultComponent,
    LoginComponent,
    HomeComponent,
    ProfileListComponent,
    ProfileDetailsComponent,
    ProfileEditComponent,
    EditModeDirective,
    ViewModeDirective,
    EditableOnEnterDirective,
    FocusableDirective,
    FocusableDirective,
    EditableComponent
  ],
  imports: [
    MatCardModule,
     MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    SharedModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MatSidenavModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DefaultModule { }
