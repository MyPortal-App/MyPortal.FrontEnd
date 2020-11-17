import { Component, OnInit } from '@angular/core';
import {AuthService} from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'pm-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  pageTitle: string = 'My Portal';
  loggedIn: boolean;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loggedIn = this.authService.loggedIn();
  }
   logout()
   {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
