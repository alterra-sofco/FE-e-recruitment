import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { Subscription, take } from 'rxjs';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { SessionService } from 'src/app/shared/services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {

  subscription!: Subscription;

  submitted = false;
  formRegister: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(50)]),
    password: new FormControl('', [Validators.required, Validators.maxLength(100)]),
  });

  constructor(
    private primengConfig: PrimeNGConfig,
    private router: Router,
    private authService: AuthenticationService,
    private sessionService: SessionService,
    public messageService: MessageService
  ) { }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  onSubmit() {
    this.submitted = true;
    if (this.formRegister.valid) {
      this.authService.login(this.formRegister.value).pipe(take(1)).subscribe((data: any) => {
        if (data.status == 200) {
          localStorage.setItem('JwtToken', data.data.accessToken);
          this.sessionService.createSession(data.data);
          this.messages(data.message, 'success', 'Success', '');
        } else {
          this.messages(data.message, 'warn', 'Warn', '/login');
        }
      })
      this.messages('wrong password/ email', 'error', 'Error', '/login');
      this.onReset();
    }

  }

  messages(info: string, severity: string, summary: string, url: string) {
    this.messageService.add({
      key: 'notif',
      severity: severity,
      summary: summary,
      detail: info,
      life: 3000
    });
    setTimeout(() => {
      this.router.navigateByUrl(`${url}`);
    }, 1300);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onReset(): void {
    this.submitted = false;
    this.formRegister.reset();
  }

}
