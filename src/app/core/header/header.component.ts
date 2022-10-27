import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PrimeNGConfig} from 'primeng/api';
import {SessionService} from 'src/app/shared/services/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userSession: any;

  //user
  userName$?: string;

  constructor(
    private primengConfig: PrimeNGConfig,
    private sessionService: SessionService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    if (this.sessionService.isUserLogin()) {
      this.userName$ = this.sessionService.getSession().name;
    }
  }

  goingTo() {
    this.ngOnInit();
    this.router.navigateByUrl('profile/details');
    console.log("login")
  }

  logOut() {
    this.sessionService.destroySession();
    this.ngOnInit()

    this.router.navigateByUrl('');
    alert("logout")
  }

}
