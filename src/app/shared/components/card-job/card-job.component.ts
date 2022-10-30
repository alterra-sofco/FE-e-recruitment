import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Subscription, take } from 'rxjs';
import { Applicant } from '../../models/applicant';
import { Job, JobDetails } from '../../models/job';
import { JobService } from '../../services/job.service';
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import { HomepageJobDetailComponent } from '../homepage-job-detail/homepage-job-detail.component';

@Component({
  selector: 'app-card-job',
  templateUrl: './card-job.component.html',
  styleUrls: ['./card-job.component.css'],
  providers: [MessageService,DialogService]
})
export class CardJobComponent implements OnInit {

  @Input('jobList') job?: Job;
  @Input('userData') applicant!: Applicant;
  @Input('applied') companyDetails?: any;
  @Input('isGrid') isGrid!: boolean;

  resume: string = ' please kindly check my profile ';

  ref !: DynamicDialogRef;

  jobDetail: JobDetails = {
    JobDetail: '',
    isApplied: true,
    jobPosition: '',
    jobPostingId: 0,
    updatedAt: '',
    yearExperience: 0
  }

  //modal
  displayMaximizable!: boolean;
  displayMaxApply!: boolean;

  formApply!: FormGroup;
  subscription!: Subscription;
  submitted = false;

  constructor(
    private jobService: JobService,
    public messageService: MessageService,
    private dialogService: DialogService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.moreJobDetail(this.job);
    //this.data.subscribe((data: any) => console.log(JSON.stringify(data)))
    this.formApply = new FormGroup({
      coverLetter: new FormControl('please kindly check my profile', [Validators.required]),
    });

  }

  apply() {
    this.submitted = true;
    console.log(this.job?.jobPostingId)
    if (this.formApply.valid) {
      this.jobService.applyJob(this.job!.jobPostingId, this.formApply.value)
        .pipe(take(1)).subscribe(data => {
          if (data.status < 301) {
            this.messages(data.message, 'success', 'Success', '');
          } else {
            this.messages(data.message, 'warn', 'Warn', '');
          }
        })
    }
    this.submitted = false;
  }

  showMaximizableDialogApply() {
    this.displayMaxApply = true;
  }

  showMaximizableDialog() {
    this.displayMaximizable = true;
    if (this.companyDetails) {
      console.log(this.companyDetails)
      this.moreJobDetail(this.companyDetails);
    }
  }

  viewDetail() {

    this.jobService.id = this.jobDetail.jobPostingId;

    this.ref = this.dialogService.open(HomepageJobDetailComponent, {
      header: 'Job detail',
      width: '70%',
      contentStyle: {"max-height": "100%", "overflow": "auto"},
      baseZIndex: 10000,
      maximizable: true
    });
  }

  moreJobDetail(job: any) {
    this.jobService.getJobDetail(job!.jobPostingId).pipe(take(1)).subscribe(data => {
      this.jobDetail = data.data;
    })
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
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

}
