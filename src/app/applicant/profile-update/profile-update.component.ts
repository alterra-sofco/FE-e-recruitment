import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { Subscription, take } from 'rxjs';
import { Applicant } from 'src/app/shared/models/applicant';
import { Skill } from 'src/app/shared/models/skill';
import { ProfileService } from 'src/app/shared/services/profile.service';
import { SkillService } from 'src/app/shared/services/skill.service';
// import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})
export class ProfileUpdateComponent implements OnInit {

  subscription!: Subscription;

  //date
  dates!: Date[];
  rangeDates!: Date[];
  minDate!: Date;
  maxDate!: Date;
  invalidDates!: Array<Date>

  //file
  uploadedFiles: any[] = [];

  //subs
  userData!: Applicant;

  submitted = false;
  formProfile: FormGroup = new FormGroup({
    address: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    bio: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    dob: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    email: new FormControl('', [Validators.maxLength(50)]),
    name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)/), Validators.maxLength(12)]),
    

  });

  constructor(
    private primengConfig: PrimeNGConfig,
    private router: Router,
    private profileService: ProfileService,
    // private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;

    //sub profile
    this.profileService.getProfile().pipe(take(1)).subscribe(data => {
      this.userData = data["data"];
    })

    // date
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month - 1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;
    this.minDate = new Date();
    this.minDate.setMonth(prevMonth);
    this.minDate.setFullYear(prevYear);
    this.maxDate = new Date();
    this.maxDate.setMonth(nextMonth);
    this.maxDate.setFullYear(nextYear);

    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    this.invalidDates = [today, invalidDate];
  }

  onBasicUpload(event: any) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
      this.profileService.uploadProfilePicture(file).pipe(take(1)).subscribe(data => {
        console.log(data);
        alert(data.message)
      })
    }
    //  this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });
  }

  onSubmit() {
    this.submitted = true;
    if (this.formProfile.valid) {
      this.profileService.editUserProfile(this.formProfile.value).pipe(take(1)).subscribe(data => {
        alert("updated")
        this.router.navigateByUrl('profile/details')
      })
      this.onReset()
    }
  }

  onSubmitPorto(){
  }

  onReset(): void {
    this.submitted = false;
    this.formProfile.reset();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
