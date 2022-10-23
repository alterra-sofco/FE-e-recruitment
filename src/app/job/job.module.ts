import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AppliedJobComponent } from './applied-job/applied-job.component';


@NgModule({
  declarations: [
  
    AppliedJobComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class JobModule { }
