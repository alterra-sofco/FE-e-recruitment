import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MessageService, PrimeNGConfig} from 'primeng/api';
import {Subscription} from 'rxjs';
import {AuthenticationService} from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [MessageService]
})
export class RegisterComponent implements OnInit {

  subscription!: Subscription;

  submitted = false;
  formRegister!: FormGroup;

  constructor(
    private primengConfig: PrimeNGConfig,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthenticationService,
    public messageService: MessageService
  ) {
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.formRegister = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(50)]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)/), Validators.maxLength(12)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.formRegister.valid) {
      this.authService.register(this.formRegister.value).subscribe(data => {
        this.onReset();
        if (data.status === "201") {
          this.messageService.add({
            key: 'notifRegister',
            severity: 'success',
            summary: 'Successful',
            detail: data.message,
            life: 3000
          });
          setTimeout(() => {
            this.router.navigateByUrl(``);
          }, 1300);
        } else {
          this.submitted = false;
          this.messageService.add({
            key: 'notifRegister',
            severity: 'danger',
            summary: 'Successful',
            detail: "Something wrong",
            life: 3000
          });
        }
      })
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
