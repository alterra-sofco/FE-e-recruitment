import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Experience} from '../models/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(
    private httpClient: HttpClient
  ) {
  }


  getExperience(experienceId: number): Observable<Experience> {
    return this.httpClient.get<Experience>(`${environment.apiUrl}/account/applicant/experience/${experienceId}`);
  }

  updateExperience(experienceId: number, payload: Experience): Observable<Experience> {
    return this.httpClient.put<Experience>(`${environment.apiUrl}/account/applicant/experience/${experienceId}`, payload);
  }

  addExperience(payload: Experience): Observable<Experience> {
    return this.httpClient.post<Experience>(`${environment.apiUrl}/account/applicant/experience/`, payload);
  }

  deleteExperience(experienceId: number): Observable<Experience> {
    return this.httpClient.delete<Experience>(`${environment.apiUrl}/account/applicant/experience/${experienceId}`);
  }
}
