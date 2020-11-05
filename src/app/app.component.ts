import {Component} from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <nav class='navbar navbar-expand navbar-light bg-light'>
      <a class='navbar-brand'>{{pageTitle}}</a>
      <ul class='nav nav-pills'>
        <li><a class='nav-link' [routerLink]="['/login']">Login</a></li>
        <li><a class='nav-link' [routerLink]="['/profilelist']">User Profiles list</a></li>
        <li><a class='nav-link' [routerLink]="['/profile']">View Profile</a></li>
      </ul>
    </nav>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
  `
})

export class AppComponent {
  pageTitle: string = 'My Portal';
}