import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  createSession(info: any) {
    localStorage.setItem('userPayload', JSON.stringify(info));
  }

  getSession() {
    return JSON.parse(localStorage.getItem('userPayload')!);
  }

  getToken() {
    return localStorage.getItem('jwtToken');
  }

  isUserLogin(): boolean {
    const jwt = localStorage.getItem('jwtToken');
    return jwt ? true : false;
  }

  getEmail(): Observable<string> {
    const email = this.getSession()?.email;
    return of(email);
  }

  getName(): Observable<string> {
    const name = this.getSession()?.name;
    return of(name);
  }

  getRole():Observable<string> {
    const role = this.getSession()?.role;
    return of(role);
  }

  destroySession() {
    localStorage.clear();
  }
}
