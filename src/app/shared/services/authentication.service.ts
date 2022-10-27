import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Register } from '../models/auth';
import { Login } from '../models/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private httpClient: HttpClient
  ) { }

  register(payload: Register): Observable<any> {
    return this.httpClient.post<any>(`${environment.apiUrl}/authentication/register`, payload);
  }

  login(payload: Login): Observable<any> {
    return this.httpClient.post<any>(`${environment.apiUrl}/authentication/login/job-seeker`, payload);
  }
}

