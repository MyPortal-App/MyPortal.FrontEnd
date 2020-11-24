import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/_services/profile.service';
import { IUserProfile } from 'src/app/interfaces/userProfile';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'pm-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {
  pageTitle = 'Welcome';
  errorMessage = '';
  controls: FormArray;
  entities = [];
  userProfile: IUserProfile | undefined;
  id: any;
  user: any;
  profileForm: FormGroup;
  constructor(private userProfileService: ProfileService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
      this.getUserProfile(this.id);
      this.profileForm = this.formBuilder.group({
        age: ['', Validators.required],
        race: ['', Validators.required],
        maritalStatus: ['', Validators.required],
        spouseName: ['', Validators.required],
        spouseMaidenName: ['', Validators.required],
        nextofKinName: ['', Validators.required],
        homeAddress: ['', Validators.required],
        contactCell: ['', Validators.required],
      });
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

  getControl( field: string ): FormControl {
      return this.profileForm.get(field) as FormControl;
  }

  updateField(field: string) {
    const control = this.getControl(field);

    if (control.valid) {
      // TODO update field functionality
    }

  }
}
