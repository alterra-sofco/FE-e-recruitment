import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Education} from '../models/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(
    private httpClient: HttpClient
  ) {
  }


  getEducation(educationId: number): Observable<Education> {
    return this.httpClient.get<Education>(`${environment.apiUrl}/account/applicant/education/${educationId}`);
  }

  updateEducation(educationId: number, payload: Education): Observable<Education> {
    const headerOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json; charset=UTF-8',
      }),
    };
    return this.httpClient.put<Education>(`${environment.apiUrl}/account/applicant/education/${educationId}`, payload, headerOption);
  }

  addEducation(payload: Education): Observable<any> {
    const headerOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json; charset=UTF-8',
      }),
    };
    return this.httpClient.post<any>(`${environment.apiUrl}/account/applicant/education`, payload, headerOption);
  }

  deleteEducation(educationId: number): Observable<Education> {
    const headerOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json; charset=UTF-8',
      }),
    };
    return this.httpClient.delete<Education>(`${environment.apiUrl}/account/applicant/education/${educationId}`, headerOption);
  }

}
