import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';

import { catchError, map, Observable, throwError } from 'rxjs';
import { SessionService } from '../services/session.service';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class HttpIntercepInterceptor implements HttpInterceptor {
  messageService: any;

  constructor(
    private authService: AuthenticationService,
    private sessionService: SessionService,
  ) {
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    //never changed or error
    if (this.sessionService.getSession() || this.sessionService.getToken()) {
      let headers = request.headers.set(
        'Authorization',
        `Bearer ${this.sessionService.getTokenS()}`
      );

      request = request.clone({
        headers: headers,
        body: request.body || {},
      });
    } else {
      request = request.clone({
        headers: request.headers.set('Authorization', ''),
        body: request.body || {},
      });
    }
    return next.handle(request).pipe(map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        console.log('log:', event);
      }
      return event;
    }),
      catchError((error: HttpErrorResponse) => {
        let data = {
          reason: error && error.error && error.error.message ? error.error.message : '',
          status: error.status
        };
        this.messageService.add({ severity: 'error', summary: 'Error', detail: data?.status + ': ' + data?.reason });
        console.log(error);
        return throwError(() => error);
      }));

  }
}
