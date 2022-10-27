import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { take } from 'rxjs';
import { Applicant } from 'src/app/shared/models/applicant';
import { Education } from 'src/app/shared/models/education';
import { EducationService } from 'src/app/shared/services/education.service';
import { ProfileService } from 'src/app/shared/services/profile.service';

@Component({
  selector: 'app-profile-education',
  templateUrl: './profile-education.component.html',
  styleUrls: ['./profile-education.component.css']
})
export class ProfileEducationComponent implements OnInit {

  @Input('dataEdu') dataEdu!: Education[];

  constructor(
    private router: Router,
    private educationService: EducationService,
    private profileService: ProfileService,
    private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;

    if(!this.dataEdu) this.profileService.getProfile().pipe(take(1)).subscribe(data=> {
      let param = data.data.educations;
      this.dataEdu = param;
    })

  }

  deleteEdu(edu: Education) {
    this.educationService.deleteEducation(edu.educationId).pipe(take(1)).subscribe(data => {
      alert("delete data");
      this.router.navigateByUrl('/profile/details');
    })
  }

}
