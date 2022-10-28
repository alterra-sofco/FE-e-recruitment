import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PrimeNGConfig} from 'primeng/api';
import {take} from 'rxjs';
import {Experience} from 'src/app/shared/models/experience';
import {ExperienceService} from 'src/app/shared/services/experience.service';
import {ProfileService} from 'src/app/shared/services/profile.service';

@Component({
  selector: 'app-profile-experience',
  templateUrl: './profile-experience.component.html',
  styleUrls: ['./profile-experience.component.css']
})
export class ProfileExperienceComponent implements OnInit {

  @Input('dataExp') dataExp!: Experience[];

  constructor(private router: Router,
              private experienceService: ExperienceService,
              private profileService: ProfileService,
              private primengConfig: PrimeNGConfig) {
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;

    if (!this.dataExp) this.profileService.getProfile().pipe(take(1)).subscribe(data => {
      let param = data.data.experiences;
      this.dataExp = param;
    })

  }

  deleteExp(exp: Experience) {
    this.experienceService.deleteExperience(exp.experienceId).pipe(take(1)).subscribe(data => {
      alert("delete data");
      this.router.navigateByUrl('/profile/details');
    })
  }

}
