import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { BehaviorSubject, Subject, take } from 'rxjs';
import { Applicant } from 'src/app/shared/models/applicant';
import { EducationService } from 'src/app/shared/services/education.service';
import { ExperienceService } from 'src/app/shared/services/experience.service';
import { ProfileService } from 'src/app/shared/services/profile.service';
import {FormBuilder, FormGroup} from "@angular/forms";

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

  uploadForm !: FormGroup;

  constructor(
    private messageService: MessageService,
    private profileService: ProfileService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({
      file: ['']
    });
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
    let formData:FormData = new FormData();
    for(let file of event.files) {

      formData.append("file", file);
    }
    setTimeout(() => { this.profileService.uploadProfilePicture(formData).pipe(take(1)).subscribe(data => {
      console.log(data);
      this.userData = data.data;
      this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
      window.location.reload();
    });
    }, 5000)


}

}
