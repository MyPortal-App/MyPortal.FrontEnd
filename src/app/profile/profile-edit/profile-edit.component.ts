import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/_services/profile.service';
import { IUserProfile } from 'src/app/interfaces/userProfile';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'pm-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

  pageTitle = 'User Profile Edit';
  errorMessage = '';
  userProfile: IUserProfile | undefined;
  id: any;
  user: any;
  constructor(
    private router: Router,
    private location: Location,
    private userProfileService: ProfileService) {
  }

  ngOnInit(): void {
    this.getUserProfile(this.id);
    console.log(this.userProfile);
  }
  getUserProfile(id: number): void {
    this.user = JSON.parse(localStorage.getItem('user'));

    console.log(this.user);
    if (this.user){
      this.userProfile = this.user;
      this.userProfile.token = "";
    } else{
      this.userProfileService.getUserProfile(this.user.user.id).subscribe({
        next: userProfile => this.userProfile = userProfile,
        error: err => this.errorMessage = err
      });
    }

  }

  onSubmit(): void {
    localStorage.setItem('user', JSON.stringify(this.userProfile));
    this.userProfile.user.age = +this.userProfile.user.age;
    this.userProfile.user.id = +this.userProfile.user.id;
    this.userProfile.user.salaryLevel = +this.userProfile.user.salaryLevel;
    this.userProfile.user.age = +this.userProfile.user.age;

     this.userProfileService.updateUserProfile(this.userProfile).subscribe({
       next: () => this.router.navigate(['/profile']),
       error: err => this.errorMessage = err
     });
  }

  onBack(): void {
    this.location.back();
  }
}
