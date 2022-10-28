import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Subscription, take } from 'rxjs';
import { Applicant } from 'src/app/shared/models/applicant';
import { Degree, Education } from 'src/app/shared/models/education';
import { EducationService } from 'src/app/shared/services/education.service';

@Component({
  selector: 'app-form-education',
  templateUrl: './form-education.component.html',
  styleUrls: ['./form-education.component.css'],
  providers: [MessageService]
})
export class FormEducationComponent implements OnInit {

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
  degrees: any[];
  selectedDegree!: Degree;

  education!: Education[];
  selectedId: any;
  selectedEdu: Education ={
    educationId:0,
    degree: '',
    description:'' ,
    educationName:'', 
    endDate: '',
    major:'',
    startDate:'' 
  }

  isUpdate = false;

  submitted = false;
  formEducation: FormGroup = new FormGroup({
    degree: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    description: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    educationName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    endDate: new FormControl('', [Validators.required]),
    major: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    startDate: new FormControl('', [Validators.required])

  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private educationService: EducationService,
    public messageService: MessageService,
  ) {

    this.degrees = [ "HIGH_SCHOOL","BACHELOR","MASTER","DOCTOR", "PHD" ];
  }

  ngOnInit(): void {

    this.selectedId = this.route.snapshot.paramMap.get('id');
    if (this.selectedId) this.educationService.getEducation(this.selectedId).subscribe((data: any) => {
      this.selectedEdu = data.data;
      this.isUpdate = true;
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

  onSubmit() {
    this.submitted = true;
    console.log(this.formEducation.value)
    console.log(this.isUpdate)
    if (this.formEducation.valid && this.isUpdate == false) {
      this.educationService.addEducation(this.formEducation.value).subscribe((data:any) => {
        if (data.status == 201) {
          this.messages('add education', 'success', 'Success', '/profile/details');
        } else {
          this.messages(data.message, 'warn', 'Warn', '/profile/experience');
        }
      })
      this.onReset()
    }
    else if (this.formEducation.valid && this.isUpdate == true) {
      this.educationService.updateEducation(parseInt(this.selectedId), this.formEducation.value).subscribe((data:any) => {
        if (data.status == 200) {
          this.messages('update education', 'success', 'Success', '/profile/details');
        } else {
          this.messages(data.message, 'warn', 'Warn', '/profile/experience');
        }
        this.isUpdate = false;
      })
      this.onReset()
    }
  }

  onReset(): void {
    this.submitted = false;
    this.formEducation.reset();

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
      this.reload(url);
    }, 1300);
  }

  async reload(url: string): Promise<boolean> {
    await this.router.navigateByUrl('/', { skipLocationChange: true });
    return this.router.navigateByUrl(`${url}`);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
