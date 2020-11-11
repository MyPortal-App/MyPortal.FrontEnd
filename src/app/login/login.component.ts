import { Component, OnInit } from '@angular/core';
import { AuthService} from '../_services/auth.service';
import { Router } from '@angular/router';
import {DatasharingService} from 'src/app/shared/datasharing.service';



@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loggedIn: boolean;

  constructor(private authService: AuthService, private router: Router, private datasharing: DatasharingService) { }

  ngOnInit() {
     }

  login()
  {
   this.authService.login(this.model).subscribe(next => {
     this.datasharing.SharingData.next(true);
     this.router.navigate(['/profile']);
   }, error => {
   });
  }
  logout(){
    this.loggedIn = false;
  }
}
