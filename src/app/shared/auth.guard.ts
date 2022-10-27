import { Injectable } from '@angular/core';
import {  CanActivate, CanLoad, Router} from '@angular/router';

import { SessionService } from './services/session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(
    private router: Router,
    private sessionService: SessionService
  ) {
  }

  canActivate() {
    return this.canLoad();
  }

  canLoad(): boolean {
    const result = this.isLogin();
    if (result == false) {
      this.router.navigateByUrl('login');
    }
    return result;
  }

  isLogin(): boolean {
    if (this.sessionService.isUserLogin()) {
      return true;
    } else {
      // this.router.navigateByUrl('login');
      return false;
    }
  }
}
