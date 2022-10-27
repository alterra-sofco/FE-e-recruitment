import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(
    private httpClient: HttpClient
  ) {
  }


  getAllJob(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${environment.apiUrl}/job`);
  }

  getJobDetail(jobPostingId: number): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}/job/${jobPostingId}`);
  }

  applyJob(jobPostingId: number, cv: any): Observable<any> {
    return this.httpClient.post<any>(`${environment.apiUrl}/job/${jobPostingId}/apply`, cv);
  }


  jobHistory(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${environment.apiUrl}/job/history`);
  }
}
