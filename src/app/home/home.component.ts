import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  public pageTitle = 'Welcome';

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }
}


