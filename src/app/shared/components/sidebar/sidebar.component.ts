import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/_services/auth.service';
import {DatasharingService} from 'src/app/shared/datasharing.service';

@Component({
  selector: 'pm-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  loggedIn: boolean;
  constructor(private authService: AuthService, private datasharing: DatasharingService) { 
    this.datasharing.SharingData.subscribe((res: any) =>
    {this.loggedIn = res; });
  }

  ngOnInit() {
    this.loggedIn = this.authService.loggedIn();
    console.log(this.loggedIn);
  }

}