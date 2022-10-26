import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
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
      this.router.navigateByUrl('/auth/login');
    }
    return result;
  }

  isLogin(): boolean {
    if (this.sessionService.isUserLogin()) {
      return true;
    } else {
      return false;
    }
  }
}
