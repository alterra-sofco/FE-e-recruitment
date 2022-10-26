import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { Subscription, take } from 'rxjs';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { SessionService } from 'src/app/shared/services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
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
    // public messageService: MessageService
  ) { }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  onSubmit() {
    this.submitted = true;
    if (this.formRegister.valid) {
      this.authService.login(this.formRegister.value).subscribe((data: any) => {
        if (data) {
          localStorage.setItem('JwtToken', data.data?.accessToken);
          this.sessionService.createSession(data.data);
          alert("ok")
        }
        this.router.navigateByUrl("")
      })
      this.onReset()
    }
    else {
      alert("error")
    }
  }

  onReset(): void {
    this.submitted = false;
    this.formRegister.reset();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


}