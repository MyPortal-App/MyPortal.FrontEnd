import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/_services/profile.service';
import { IUserProfile } from 'src/app/interfaces/userProfile';

@Component({
  selector: 'pm-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {
  pageTitle = 'User Profile Detail';
  errorMessage = '';
  userProfile: IUserProfile | undefined;
  id: any;
  constructor(private userProfileService: ProfileService) {
  }

  ngOnInit(): void {
      this.getUserProfile(this.id);
  }
  getUserProfile(id: number): void {
     this.userProfileService.getUserProfile(id).subscribe({
       next: userProfile => this.userProfile = userProfile,
       error: err => this.errorMessage = err
     });
  }
  onBack(): void {
    // this.router.navigate(['/userprofiles']);
  }
}
