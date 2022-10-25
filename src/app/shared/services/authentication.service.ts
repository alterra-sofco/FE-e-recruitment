import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Register } from '../models/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private httpClient: HttpClient
  ) { }

  register(payload: Register) : Observable<Register>{
    return this.httpClient.post<Register>(`${environment.apiUrl}/authentication/register`, payload);
  }
}

