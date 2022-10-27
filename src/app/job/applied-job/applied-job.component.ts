import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/shared/services/job.service';

@Component({
  selector: 'app-applied-job',
  templateUrl: './applied-job.component.html',
  styleUrls: ['./applied-job.component.css']
})
export class AppliedJobComponent implements OnInit {

  constructor(
    private jobService : JobService,
  ) { }

  ngOnInit(): void {
  }

  
}
