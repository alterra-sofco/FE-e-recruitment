import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import { MasterDataModel } from '../models/job';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getAllJobFilter(first?: number, rows?: number, globalFilter?: string): Observable<MasterDataModel> {
    rows = rows ? rows : 10;
    first = first ? first / rows : 0;
    globalFilter = globalFilter ? globalFilter : '';
    return this.httpClient.get<MasterDataModel>(`${environment.apiUrl}/job?page=${first}&size=${rows}&keyword=${globalFilter}`);
  }


  getAllJob(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${environment.apiUrl}/job`);
  }

  getJobDetail(jobPostingId: number): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}/job/${jobPostingId}`);
  }

  applyJob(jobPostingId: number, cv: string): Observable<any> {
    const headerOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json; charset=UTF-8',
      }),
    };
    return this.httpClient.post<any>(`${environment.apiUrl}/job/${jobPostingId}/apply`, cv,headerOption);
  }

  jobHistory(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${environment.apiUrl}/job/history`);
  }
}
