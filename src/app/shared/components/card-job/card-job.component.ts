import { Component, Input, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Applicant } from '../../models/applicant';
import { Job, JobDetails } from '../../models/job';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-card-job',
  templateUrl: './card-job.component.html',
  styleUrls: ['./card-job.component.css']
})
export class CardJobComponent implements OnInit {

  @Input('jobList') job!: Job;
  @Input('userData') applicant!: Applicant;

  jobDetail: JobDetails[] =  [{
    JobDetail: '',
    isApplied: true,
    jobPosition: '',
    jobPostingId: 0,
    updatedAt: '',
    yearExperience: 0
  }]

  //modal
  displayMaximizable!: boolean;

  constructor(
    private jobService: JobService,
  ) { }

  ngOnInit(): void {
  }


  apply() {
    this.jobService.applyJob(this.applicant.userId, this.applicant.cvFileId)
    .pipe(take(1)).subscribe(data =>{
      alert("apllied the job");
    })
  }

  showMaximizableDialog() {
    this.displayMaximizable = true;
    this.jobService.getJobDetail(this.job.jobPostingId).pipe(take(1)).subscribe(data =>{
      this.jobDetail = data.data;
    })
  }

}
