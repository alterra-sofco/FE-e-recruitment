import { Component, OnInit } from '@angular/core';
import {DialogService, DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {config} from "rxjs";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {JobService} from "../../shared/services/job.service";

@Component({
  selector: 'app-apply-job',
  templateUrl: './apply-job.component.html',
  styleUrls: ['./apply-job.component.css']
})
export class ApplyJobComponent implements OnInit {

  position !: string;
  id !: number;
  formApply = new FormGroup({
    coverLetter : new FormControl()
  });


  constructor(private ref: DynamicDialogRef, private config: DynamicDialogConfig, private jobService: JobService) { }

  ngOnInit(): void {
    this.position = this.config.data.position;
  }

  onSubmit(){
    this.jobService.applyJob(this.config.data.id, this.formApply.value).subscribe((res) => window.location.reload())
  }

}
