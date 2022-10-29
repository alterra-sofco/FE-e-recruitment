import { Component, OnInit } from '@angular/core';
import {JobService} from "../../shared/services/job.service";
import {take} from "rxjs";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {ApplyJobComponent} from "../apply-job/apply-job.component";

@Component({
  selector: 'app-homepage-job-detail',
  templateUrl: './homepage-job-detail.component.html',
  styleUrls: ['./homepage-job-detail.component.css']
})
export class HomepageJobDetailComponent implements OnInit {
  id !: number;

  jobDetail: any;
  ref !: DynamicDialogRef;

  constructor(private jobService: JobService, private dialogService: DialogService) { }

  ngOnInit(): void {
    this.id  = this.jobService.id;
    this.jobService.getJobDetail(this.id).pipe(take(1)).subscribe(data => {
      this.jobDetail = data.data;
    })

  }
  apply(id:number){
    this.ref = this.dialogService.open(ApplyJobComponent, {
      header: 'Submit',
      width: '30%',
      data: {
        id: '51gF3'
      },
      contentStyle: {"max-height": "30%", "overflow": "auto"},
      baseZIndex: 10000
    });
  }

}
