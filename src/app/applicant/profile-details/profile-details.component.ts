import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, take } from 'rxjs';
import { Applicant } from 'src/app/shared/models/applicant';
import { EducationService } from 'src/app/shared/services/education.service';
import { ExperienceService } from 'src/app/shared/services/experience.service';
import { ProfileService } from 'src/app/shared/services/profile.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {

  applicant!: Applicant;
  userData!: Applicant | null;
  isSkillTouched: boolean = false;

  constructor(
    private profileService: ProfileService,
     ) { }

  ngOnInit(): void {
    this.profileService.getProfile().pipe(take(1)).subscribe(data => {
      this.userData = data.data;
    })

  }

  showCrud(){
    this.isSkillTouched = true;
  }

  onSubmitEdu(){

  }

  onSubmitExp(){

  }


  onUpload($event:any){

  }

}
