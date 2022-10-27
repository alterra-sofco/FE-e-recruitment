import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Skill} from '../models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getSkill(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${environment.apiUrl}/master_skill`);
  }

  addSkill(payload: Skill): Observable<Skill> {
    return this.httpClient.post<Skill>(`${environment.apiUrl}/account/applicant/skill`, payload);
  }

  deleteSkill(skillId: any): Observable<Skill> {
    return this.httpClient.delete<Skill>(`${environment.apiUrl}/account/applicant/skill/${skillId}`);
  }
}
