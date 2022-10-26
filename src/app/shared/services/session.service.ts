import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(){
    
  }

  createSession(info: any) {
    localStorage.setItem('userPayload', JSON.stringify(info));
  }

  getSession() {
    return JSON.parse(localStorage.getItem('userPayload')!);
  }

  getTokenS() {
    const token = this.getSession();
    return token["accessToken"];
  }

  getToken() {
    return localStorage.getItem('jwtToken');
  }

  isUserLogin(): boolean {
    const jwt = localStorage.getItem('userPayload');
    return jwt ? true : false;
  }

  destroySession() {
    localStorage.clear();
    window.sessionStorage.clear();
  }
}
