import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
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

  //condition
  isSkillTouched: boolean = false;
  isCredentialTouch: boolean = false;

  uploadedFiles: any[] = [];

  constructor(
    private messageService: MessageService,
    private profileService: ProfileService,
  ) { }

  ngOnInit(): void {
    this.profileService.getProfile().pipe(take(1)).subscribe(data => {
      this.userData = data.data;
    })

  }

  showCrud() {
    if (this.isSkillTouched == false) {
      this.isSkillTouched = true;
    } else {
      this.isSkillTouched = true;
    }
  }

  uploadCv() {
    if (this.isCredentialTouch == false) {
      this.isCredentialTouch = true;
    } else {
      this.isCredentialTouch = true;
    }
  }

  onUpload(event:any) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }
    this.profileService.uploadProfilePicture(this.uploadedFiles).pipe(take(1)).subscribe(data => {
      console.log(data)
      this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
    })
    
}

}
