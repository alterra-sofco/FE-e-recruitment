import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { Subscription, take } from 'rxjs';
import { Register } from 'src/app/shared/models/auth';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  subscription!: Subscription;

  submitted = false;
  formRegister: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(50)]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)/), Validators.maxLength(12)]),
    password: new FormControl('', [Validators.required, Validators.maxLength(100)]),
  });

  constructor(
    private primengConfig: PrimeNGConfig,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthenticationService,
    // public messageService: MessageService
  ) { }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  onSubmit() {
    this.submitted = true;
    if (this.formRegister.valid) {
      this.authService.register(this.formRegister.value).pipe(take(1)).subscribe(data => {
        console.log(data);
        alert("ok")
        this.router.navigateByUrl("")

      })
      this.onReset()
    }
  }

  onReset(): void {
    this.submitted = false;
    this.formRegister.reset();

  }

  get f(): { [key: string]: AbstractControl } {
    return this.formRegister.controls;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
