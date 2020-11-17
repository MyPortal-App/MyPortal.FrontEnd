import { Component, OnInit } from '@angular/core';
import { AuthService} from '../_services/auth.service';
import { Router } from '@angular/router';
import {DatasharingService} from 'src/app/shared/datasharing.service';
import { AlertifyService } from '../_services/alertify.service';
import {Sidebarcontrols} from '../interfaces/sidebarcontrols';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  sidebrcontrols: any = {};
  loggedIn: boolean;
  data: any;
  sidebarcontrols: Sidebarcontrols | undefined;
  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router,
              private datasharing: DatasharingService, private alertifyService: AlertifyService, private formBuilder: FormBuilder) { }
  ngOnInit() {
      
    // Login Form
       this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
      });
     }

  login(credentials: any)
  {
   this.authService.login(credentials).subscribe(next => {
     this.alertifyService.success('Login successful');
     this.sidebrcontrols.IsloggedIn = true;
     const user = JSON.parse(localStorage.getItem('user'));
     this.sidebrcontrols.Username = user.user.username;
     this.datasharing.SharingData.next( this.sidebrcontrols);
     this.router.navigate(['/profile']);
   }, error => {
    this.alertifyService.error(error);
   });
  }
  logout(){
    this.loggedIn = false;
  }
}
