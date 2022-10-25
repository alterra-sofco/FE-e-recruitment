import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Education } from '../models/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(
    private httpClient: HttpClient
  ) { }


  getEducation(educationId: number): Observable<Education> {
    return this.httpClient.get<Education>(`${environment.apiUrl}/account/applicant/education/${educationId}`);
  }

  updateEducation(educationId: number, payload: Education): Observable<Education> {
    return this.httpClient.put<Education>(`${environment.apiUrl}/account/applicant/education/${educationId}`, payload);
  }

  addEducation(payload: Education): Observable<Education> {
    return this.httpClient.post<Education>(`${environment.apiUrl}/account/applicant/education/`, payload);
  }

  deleteEducation(educationId: number): Observable<Education> {
    return this.httpClient.delete<Education>(`${environment.apiUrl}/account/applicant/education/${educationId}`);
  }

}
