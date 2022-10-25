import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { SessionService } from 'src/app/shared/services/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userSession: any;
  isLoggin: boolean = false;
  constructor(
    private primengConfig: PrimeNGConfig,
    private sessionService: SessionService) { 
    }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.isLoggin = this.sessionService.isUserLogin();
  }

  logOut() {
    this.sessionService.destroySession();
    alert("logout")
  }

}
