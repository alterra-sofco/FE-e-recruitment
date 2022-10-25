import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Applicant, UserProfile } from '../models/applicant';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private httpClient: HttpClient
  ) { }
  
  //all data in relationship
  getProfile(): Observable<Applicant[]> {
    return this.httpClient.get<Applicant[]>(`${environment.apiUrl}/account/applicant`);
  }

  //personal data only
  editUserProfile(payload: UserProfile): Observable<UserProfile> {
    return this.httpClient.patch<UserProfile>(`${environment.apiUrl}/account/applicant/basic`,payload);
  }

  uploadProfilePicture(payload: any): Observable<any> {
    return this.httpClient.patch<any>(`${environment.apiUrl}/account/applicant/avatar`,payload);
  }

  uploadCv(payload: any): Observable<any> {
    return this.httpClient.patch<any>(`${environment.apiUrl}/account/applicant/cv`,payload);
  }

}
