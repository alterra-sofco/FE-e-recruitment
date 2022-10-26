import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './applicant/homepage/homepage.component';
import { ProfileDetailsComponent } from './applicant/profile-details/profile-details.component';
import { FormEducationComponent } from './applicant/profile-education/form-education/form-education.component';
import { ProfileEducationComponent } from './applicant/profile-education/profile-education.component';
import { FormExperienceComponent } from './applicant/profile-experience/form-experience/form-experience.component';
import { ProfileExperienceComponent } from './applicant/profile-experience/profile-experience.component';
import { ProfileUpdateComponent } from './applicant/profile-update/profile-update.component';
import { ProfileComponent } from './applicant/profile/profile.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AppliedJobComponent } from './job/applied-job/applied-job.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    component: ProfileComponent,
    children: [
      { path: 'details', component: ProfileDetailsComponent },
      { path: 'details/update', component: ProfileUpdateComponent },
      { path: 'applied', component: AppliedJobComponent },

      { path: 'experience', component: ProfileExperienceComponent },
      { path: 'experience/form', component: FormExperienceComponent },

      { path: 'education', component: ProfileEducationComponent },
      { path: 'education/form', component: FormEducationComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
