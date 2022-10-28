import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MessageService, PrimeNGConfig} from 'primeng/api';
import { Subscription } from 'rxjs';
import {SessionService} from 'src/app/shared/services/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [MessageService]
})
export class HeaderComponent implements OnInit {
  subscription!: Subscription;
  userSession: any;

  //user
  userName$?: string;

  constructor(
    private primengConfig: PrimeNGConfig,
    private sessionService: SessionService,
    private router: Router,
    public messageService: MessageService) {
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    if (this.sessionService.isUserLogin()) {
      this.userName$ = this.sessionService.getSession().name;
    }
  }

  goingTo() {
    this.router.navigateByUrl('/profile/details');
  }

  logOut() {
    this.sessionService.destroySession();
    this.messages('logout', 'success', 'Success', '');
    window.location.reload();
  }

  messages(info: string, severity: string, summary: string, url: string) {
    this.messageService.add({
      key: 'notif',
      severity: severity,
      summary: summary,
      detail: info,
      life: 3000
    });
    setTimeout(() => {
      this.reload(url)
    }, 1300);
  }

  async reload(url: string): Promise<boolean> {
    await this.router.navigateByUrl('/', { skipLocationChange: true });
    return this.router.navigateByUrl(`${url}`);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
