import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/_services/profile.service';
import { IUserProfile } from 'src/app/interfaces/userProfile';

@Component({
  selector: 'pm-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {
  pageTitle = 'Welcome';
  errorMessage = '';
  userProfile: IUserProfile | undefined;
  id: any;
  user: any;
  constructor(private userProfileService: ProfileService) {
  }

  ngOnInit(): void {
      this.getUserProfile(this.id);
  }
  getUserProfile(id: number): void {
    // to be changed because we have user already..so this call might not neccessary
     this.user = JSON.parse(localStorage.getItem('user'));
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
  onBack(): void {
    // this.router.navigate(['/userprofiles']);
  }
}
