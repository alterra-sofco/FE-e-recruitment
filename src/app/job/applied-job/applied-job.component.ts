import { Component, OnInit } from '@angular/core';
import { Subscription, take } from 'rxjs';
import { Job } from 'src/app/shared/models/job';
import { JobService } from 'src/app/shared/services/job.service';

@Component({
  selector: 'app-applied-job',
  templateUrl: './applied-job.component.html',
  styleUrls: ['./applied-job.component.css']
})
export class AppliedJobComponent implements OnInit {

  subscription!: Subscription;
  jobList: any[]=[];

  result: string = 'APPLIED';

  constructor(
    private jobService: JobService,
  ) { }

  ngOnInit(): void {
      this.jobService.jobHistory().pipe(take(1)).subscribe((data: any) => {
        this.jobList = data.data;
        this.result = data.status;
      })
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
