import {Component, Input, OnInit} from '@angular/core';
import {JobDetails} from "../../models/job";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription, take} from "rxjs";
import {JobService} from "../../services/job.service";
import {MessageService} from "primeng/api";
import {DynamicDialogRef} from "primeng/dynamicdialog";

@Component({
  selector: 'app-card-job2',
  templateUrl: './card-job2.component.html',
  styleUrls: ['./card-job2.component.scss']
})
export class CardJob2Component implements OnInit {

  @Input("jobDetail") jobDetail!: JobDetails;
  resume: string = ' please kindly check my profile ';

  formApply!: FormGroup;
  subscription!: Subscription;
  submitted = false;

  constructor(
    private jobService: JobService,
    public messageService: MessageService,
    private ref: DynamicDialogRef
  ) {
  }

  ngOnInit(): void {
    this.jobDetail = this.jobService.jobDetail;
    this.formApply = new FormGroup({
      coverLetter: new FormControl('please kindly check my profile', [Validators.required]),
    });
    this.submitted = false;
  }

  apply() {
    this.submitted = true;
    if (this.formApply.valid) {
      this.jobService.applyJob(this.jobDetail!.jobPostingId, this.formApply.value)
        .pipe(take(1)).subscribe(data => {
        if (data.status === '201') {
          this.messages(data.message, 'success', 'Success', '');
        } else {
          console.log(data.message);
          this.messages(data.message, 'warn', 'Warn', '');
        }
      })
    }

  }


  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  messages(info: string, severity: string, summary: string, url: string) {
    this.messageService.add({
      key: 'notifApply',
      severity: severity,
      summary: summary,
      detail: info,
      life: 3000
    });
    this.ref.close();
    this.submitted = false;
  }

}
