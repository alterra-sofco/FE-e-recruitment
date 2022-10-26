import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, take } from 'rxjs';
import { Applicant } from 'src/app/shared/models/applicant';
import { Degree, Education } from 'src/app/shared/models/education';
import { EducationService } from 'src/app/shared/services/education.service';

@Component({
  selector: 'app-form-education',
  templateUrl: './form-education.component.html',
  styleUrls: ['./form-education.component.css']
})
export class FormEducationComponent implements OnInit {

  @Input('dataEdu') dataUser!: Applicant;

  subscription!: Subscription;
  //date
  dateStart!: Date;
  dateEnd!: Date;
  dates!: Date[];
  rangeDates!: Date[];
  minDate!: Date;
  maxDate!: Date;
  invalidDates!: Array<Date>

  //degree
  degrees!: Degree[];
  selectedDegree!: Degree;

  education!: Education[];

  submitted = false;
  formEducation: FormGroup = new FormGroup({
    degree: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    description: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    educationName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    endDate: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    major: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    startDate: new FormControl('', [Validators.required, Validators.maxLength(50)])

  });

  constructor(
    private router: Router,
    private educationService: EducationService,
  ) {
    this.degrees = [
      { name: 'HIGH_SCHOOL' },
      { name: 'BACHELOR' },
      { name: 'MASTER' },
      { name: 'DOCTOR' },
      { name: 'PHD' }
    ];
  }

  ngOnInit(): void {
    //data
    

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

  onSubmit() {
    this.submitted = true;
    console.log(this.formEducation.value)
    if (this.formEducation.valid) {
      this.educationService.addEducation(this.formEducation.value).pipe(take(1)).subscribe(data => {
        alert("updated")
        this.router.navigateByUrl('/profile/details')
      })
      this.onReset()
    }
  }

  onReset(): void {
    this.submitted = false;
    this.formEducation.reset();

  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
