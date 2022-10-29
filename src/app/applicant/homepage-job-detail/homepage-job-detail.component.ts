import { Component, OnInit } from '@angular/core';
import {JobService} from "../../shared/services/job.service";
import {take} from "rxjs";

@Component({
  selector: 'app-homepage-job-detail',
  templateUrl: './homepage-job-detail.component.html',
  styleUrls: ['./homepage-job-detail.component.css']
})
export class HomepageJobDetailComponent implements OnInit {
  id !: number;

  jobDetail: any;

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    this.id  = this.jobService.id;
    this.jobService.getJobDetail(this.id).pipe(take(1)).subscribe(data => {
      console.log(data);
      this.jobDetail = data.data;
    })
  }

}
