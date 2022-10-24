import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './applicant/homepage/homepage.component';
import { ProfileDetailsComponent } from './applicant/profile-details/profile-details.component';
import { ProfileUpdateComponent } from './applicant/profile-update/profile-update.component';
import { ProfileComponent } from './applicant/profile/profile.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {
    path: 'profile', 
    component: ProfileComponent,
    children: [
      {path: 'details',component: ProfileDetailsComponent},
      {path: 'details/update',component: ProfileUpdateComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
