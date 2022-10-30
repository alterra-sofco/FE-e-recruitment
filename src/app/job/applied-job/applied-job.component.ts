import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Subscription, take, window } from 'rxjs';
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

  displayMaximizable!: boolean;
  result: string = 'APPLIED';

  constructor(
    private jobService: JobService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.jobFetch()
      
  }

  async jobFetch(){
    this.jobService.jobHistory().pipe(take(1)).subscribe((data: any) => {
      this.jobList = data.data;
      this.result = data.status;
      console.log(this.jobList);
    })
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  showMaximizableDialog() {
    if(this.displayMaximizable){
      this.displayMaximizable = false;
    } else {
      this.displayMaximizable = true;
    }
    
  }

}
