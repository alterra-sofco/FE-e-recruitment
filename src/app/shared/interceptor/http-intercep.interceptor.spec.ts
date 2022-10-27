import {TestBed} from '@angular/core/testing';

import {HttpIntercepInterceptor} from './http-intercep.interceptor';

describe('HttpIntercepInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpIntercepInterceptor
    ]
  }));

  it('should be created', () => {
    const interceptor: HttpIntercepInterceptor = TestBed.inject(HttpIntercepInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
