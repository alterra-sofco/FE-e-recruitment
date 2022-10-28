import {Component, OnInit} from '@angular/core';
import {take} from 'rxjs';
import {Applicant} from 'src/app/shared/models/applicant';
import {ProfileService} from 'src/app/shared/services/profile.service';

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

  constructor(
    private profileService: ProfileService,
  ) {
  }

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

  onUpload($event: any) {

  }

}
