import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    HomepageComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class ApplicantModule { }
