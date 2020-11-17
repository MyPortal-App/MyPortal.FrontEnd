import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/_services/profile.service';
import { IUserProfile } from 'src/app/interfaces/userProfile';


@Component({
  selector: 'pm-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {
  pageTitle = 'User Profile List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredUsers = this.listFilter ? this.performFilter(this.listFilter) : this.userProfiles;
  }

  filteredUsers: IUserProfile[] = [];
  userProfiles: IUserProfile[] = [];

  constructor(private userProfileService: ProfileService) { }

  onRatingClicked(message: string): void {
    this.pageTitle = 'User Profile List: ' + message;
  }

  performFilter(filterBy: string): IUserProfile[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.userProfiles.filter((userProfile: IUserProfile) =>
      userProfile.user.username.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
     this.userProfileService.getUserProfiles().subscribe({
       next: userProfiles => {
        this.userProfiles = userProfiles;
        this.filteredUsers = this.userProfiles;
       },
       error: err => this.errorMessage = err
     });
  }

}
