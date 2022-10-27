import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() {

  }

  createSession(info: any) {
    localStorage.setItem('userPayload', JSON.stringify(info));
  }

  getSession() {
    return JSON.parse(localStorage.getItem('userPayload')!);
  }

  getTokenS() {
    const token = this.getSession();
    return localStorage.getItem('JwtToken');
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
