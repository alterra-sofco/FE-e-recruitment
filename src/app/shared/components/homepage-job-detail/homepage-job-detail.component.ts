import { Component, Input, OnInit } from '@angular/core';
import { JobService } from "../../services/job.service";
import { take } from "rxjs";
import { Job, JobDetails } from '../../models/job';

@Component({
  selector: 'app-homepage-job-detail',
  templateUrl: './homepage-job-detail.component.html',
  styleUrls: ['./homepage-job-detail.component.css']
})
export class HomepageJobDetailComponent implements OnInit {
  @Input('jobDetail') JobApplied!: Job;

  id !: number;

  jobDetail: any;

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    this.id = this.jobService.id;

    if (this.JobApplied) {
      this.jobService.getJobDetail(this.JobApplied.jobPostingId).pipe(take(1)).subscribe(data => {
        this.jobDetail = data.data;
      });
    } else {
      this.jobService.getJobDetail(this.id).pipe(take(1)).subscribe(data => {
        console.log(data);
        this.jobDetail = data.data;
      })

    }

  }
}