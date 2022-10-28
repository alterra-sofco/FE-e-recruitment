import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { Experience } from 'src/app/shared/models/experience';
import { ExperienceService } from 'src/app/shared/services/experience.service';

@Component({
  selector: 'app-form-experience',
  templateUrl: './form-experience.component.html',
  styleUrls: ['./form-experience.component.css'],
  providers: [MessageService]
})
export class FormExperienceComponent implements OnInit {

  subscription!: Subscription;
  //date
  dateStart!: Date;
  dateEnd!: Date;
  dates!: Date[];
  rangeDates!: Date[];
  minDate!: Date;
  maxDate!: Date;
  invalidDates!: Array<Date>

  experience!: Experience[];
  selectedId: any;
  selectedExp: Experience ={
    experienceId: 0,
    corporateName: '',
    description: '',
    endDate: '',
    position: '',
    startDate: '',
  }

  isUpdate = false;
  submitted = false;
  formExperience: FormGroup = new FormGroup({
    position: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    description: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    corporateName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    endDate: new FormControl('', [Validators.required]),
    startDate: new FormControl('', [Validators.required])
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private experienceService: ExperienceService,
    public messageService: MessageService
    ) { }

  ngOnInit(): void { 
    this.selectedId = this.route.snapshot.paramMap.get('id');
    if (this.selectedId) this.experienceService.getExperience(this.selectedId).subscribe((data: any) => {
      this.selectedExp = data.data;
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
    console.log(this.formExperience.value)
    console.log(this.isUpdate)
    if (this.formExperience.valid && this.isUpdate == false) {
      this.experienceService.addExperience(this.formExperience.value).subscribe((data:any) => {
        if (data.status == 201) {
          this.messages('add experience', 'success', 'Success', '/profile/details');
        } else {
          this.messages(data.message, 'warn', 'Warn', '/profile/experience');
        }
      })
      this.onReset()
    }
    else if (this.formExperience.valid && this.isUpdate == true) {
      this.experienceService.updateExperience(parseInt(this.selectedId), this.formExperience.value).subscribe((data:any) => {
        if (data.status == 200) {
          this.messages('update experience', 'success', 'Success', '/profile/details');
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
    this.formExperience.reset();

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

}
