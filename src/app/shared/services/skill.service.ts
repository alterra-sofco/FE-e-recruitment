import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Skill } from '../models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getSkill(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(`${environment.apiUrl}/master_skill`);
  }

  addSkill(payload: Skill): Observable<Skill> {
    return this.httpClient.post<Skill>(`${environment.apiUrl}/account/applicant/skill`,payload);
  }

  deleteSkill(skillId: number): Observable<number>{
    return this.httpClient.delete<number>(`${environment .apiUrl}/account/applicant/skill/${skillId}`);
  }
}
