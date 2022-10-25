import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ProfileEducationComponent } from './profile-education/profile-education.component';
import { ProfileExperienceComponent } from './profile-experience/profile-experience.component';

@NgModule({
  declarations: [
    HomepageComponent,
    ProfileComponent,
    ProfileUpdateComponent,
    ProfileDetailsComponent,
    ProfileEducationComponent,
    ProfileExperienceComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class ApplicantModule { }
