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
  username: any;
  constructor(private authService: AuthService, private datasharing: DatasharingService) { 
    this.datasharing.SharingData.subscribe((res: any) =>
    {this.loggedIn = res.IsloggedIn;
     this.username = res.Username;
     });
  }

  ngOnInit() {
    this.loggedIn = this.authService.loggedIn();
  }

}
