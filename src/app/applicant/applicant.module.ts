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
import { ProfileSkillComponent } from './profile-skill/profile-skill.component';
import { HttpClientModule } from '@angular/common/http';
import { CredentialComponent } from './credential/credential.component';
import {DataViewModule} from "primeng/dataview";
import {DynamicDialogModule} from "primeng/dynamicdialog";
import { HomepageJobDetailComponent } from './homepage-job-detail/homepage-job-detail.component';
import {ConfirmPopupModule} from "primeng/confirmpopup";
import { ApplyJobComponent } from './apply-job/apply-job.component';
import {InputTextareaModule} from "primeng/inputtextarea";

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
    ProfileSkillComponent,
    CredentialComponent,
    HomepageJobDetailComponent,
    ApplyJobComponent,
  ],
    imports: [
        CommonModule,
        SharedModule,
        HttpClientModule,
        DataViewModule,
        DynamicDialogModule,
        ConfirmPopupModule,
        InputTextareaModule
    ]
})
export class ApplicantModule { }
