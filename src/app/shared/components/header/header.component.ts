import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {AuthService} from 'src/app/_services/auth.service';
import { Router } from '@angular/router';
import {DatasharingService} from 'src/app/shared/datasharing.service';
import { AlertifyService } from '../../../_services/alertify.service';

@Component({
  selector: 'pm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  constructor(private authService: AuthService, private router: Router,
              private datasharing: DatasharingService, private alertifyService: AlertifyService) { }

  ngOnInit() {
  }
  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }
  logout()
   {
    this.authService.logout();
    this.datasharing.SharingData.next(false);
    this.alertifyService.success('Logged out');
    this.router.navigate(['']);
  }
  Edit()
  {
  
  //  this.router.navigate(['']);
 }
}
