import {Component, OnInit} from '@angular/core';
import {DatasharingService} from 'src/app/shared/datasharing.service';


@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  sidebrcontrols: any = {};
  constructor( private datasharing: DatasharingService) {}
  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.sidebrcontrols.IsloggedIn = true;
      this.sidebrcontrols.Username = user.user.username;
      this.datasharing.SharingData.next(this.sidebrcontrols);
    }
  }}