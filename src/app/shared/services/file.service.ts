import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  uploadProfilePicture(payload: any): Observable<any> {
    return this.httpClient.patch<any>(`${environment.apiUrl}/account/applicant/avatar`, payload);
  }

  uploadCv(payload: any): Observable<any> {
    return this.httpClient.patch<any>(`${environment.apiUrl}/account/applicant/cv`, payload);
  }
}
