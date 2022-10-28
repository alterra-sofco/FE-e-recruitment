import {Component, OnInit} from '@angular/core';
import {take} from 'rxjs';
import {JobService} from 'src/app/shared/services/job.service';

@Component({
  selector: 'app-applied-job',
  templateUrl: './applied-job.component.html',
  styleUrls: ['./applied-job.component.css']
})
export class AppliedJobComponent implements OnInit {

  jobList: any[] = [];

  result: string = 'APPLIED';

  constructor(
    private jobService: JobService,
  ) {
  }

  ngOnInit(): void {
    this.jobService.jobHistory().pipe(take(1)).subscribe((data: any) => {
      this.jobList = data.data;
      this.result = data.status;
    })
  }

  screening(result: string) {
    // // if (result == 'APPLIED') this.cond1 = true;
    // if (result == 'ASSESSMENT') this.cond2 = true;
    // if (result == 'DONE') this.cond2 = this.cond3 = true;
    // if (result == 'INTERVIEW') this.cond2 = this.cond3 = this.cond4 = true;
    // if (result == 'SHORTLISTED') this.cond2 = this.cond3 = this.cond4 = this.cond5 = true;
    // else this.cond2 = this.cond3 = this.cond4 = this.cond5 = false; this.rejection = true;
  }


}
