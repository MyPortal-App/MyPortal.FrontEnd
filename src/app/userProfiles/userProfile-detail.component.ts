import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IUserProfile } from './userProfile';
import { UserProfileService } from './userProfile.service';

@Component({
  templateUrl: './userProfile-detail.component.html',
  styleUrls: ['./userProfile-detail.component.css']
})
export class UserProfileDetailComponent implements OnInit {
  pageTitle = 'User Profile Detail';
  errorMessage = '';
  userProfile: IUserProfile | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userProfileService: UserProfileService) {
  }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');    
    if (param) {
      const id = +param;      
      this.getUserProfile(id);
    }
  }

  getUserProfile(id: number): void {    
    this.userProfileService.getUserProfile(id).subscribe({
      next: userProfile => this.userProfile = userProfile,
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/userprofiles']);
  }
}
