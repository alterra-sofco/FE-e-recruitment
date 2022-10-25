import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './applicant/homepage/homepage.component';
import { ProfileDetailsComponent } from './applicant/profile-details/profile-details.component';
import { ProfileEducationComponent } from './applicant/profile-education/profile-education.component';
import { ProfileExperienceComponent } from './applicant/profile-experience/profile-experience.component';
import { ProfileUpdateComponent } from './applicant/profile-update/profile-update.component';
import { ProfileComponent } from './applicant/profile/profile.component';
import { AppliedJobComponent } from './job/applied-job/applied-job.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {
    path: 'profile', 
    component: ProfileComponent,
    children: [
      {path: 'details',component: ProfileDetailsComponent},
      {path: 'details/update',component: ProfileUpdateComponent},
      {path: 'applied',component: AppliedJobComponent},
      {path: 'experience',component: ProfileExperienceComponent},
      {path: 'education',component: ProfileEducationComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
