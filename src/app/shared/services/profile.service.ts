import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Applicant, UserProfile} from '../models/applicant';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  sharedData!: Subject<Applicant>;

  constructor(
    private httpClient: HttpClient,
  ) {
    this.sharedData = new Subject<Applicant>();
  }

  getProfile(): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}/account/applicant`);
  }

  //personal data only
  editUserProfile(payload: UserProfile): Observable<UserProfile> {
    const headerOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json; charset=UTF-8',
      }),
    };
    return this.httpClient.patch<UserProfile>(`${environment.apiUrl}/account/applicant/basic`, payload, headerOption);
  }

  uploadProfilePicture(payload: any): Observable<any> {
    const headerOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json; charset=UTF-8',
      }),
    };
    return this.httpClient.patch<any>(`${environment.apiUrl}/account/applicant/avatar`, payload, headerOption);
  }

  uploadCv(payload: any): Observable<any> {
    const headerOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json; charset=UTF-8',
      }),
    };
    return this.httpClient.patch<any>(`${environment.apiUrl}/account/applicant/cv`, payload, headerOption);
  }

}
