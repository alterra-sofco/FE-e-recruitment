import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ProfileEducationComponent } from './profile-education/profile-education.component';
import { ProfileExperienceComponent } from './profile-experience/profile-experience.component';
import { FormEducationComponent } from './profile-education/form-education/form-education.component';
import { FormExperienceComponent } from './profile-experience/form-experience/form-experience.component';

@NgModule({
  declarations: [
    HomepageComponent,
    ProfileComponent,
    ProfileUpdateComponent,
    ProfileDetailsComponent,
    ProfileEducationComponent,
    ProfileExperienceComponent,
    FormEducationComponent,
    FormExperienceComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class ApplicantModule { }
