import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';
import {take} from 'rxjs';
import {Applicant} from 'src/app/shared/models/applicant';
import {Job} from 'src/app/shared/models/job';
import {Skill} from 'src/app/shared/models/skill';
import {JobService} from 'src/app/shared/services/job.service';
import {ProfileService} from 'src/app/shared/services/profile.service';
import {SkillService} from 'src/app/shared/services/skill.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  search: string = '';
  applicant!: Applicant;

  //filter
  selectedSkill!: Skill;
  skill: Skill[] = [];

  //job
  selectedJob!: any;
  job: Job[] = [];
  jobList: Job[] = [];

  displayMaximizable!: boolean;

  constructor(
    private primengConfig: PrimeNGConfig,
    private skillService: SkillService,
    private profileService: ProfileService,
    private jobService: JobService,
  ) {
  }

  ngOnInit() {
    this.primengConfig.ripple = true;

    //user
    this.profileService.getProfile().pipe(take(1)).subscribe((data: any) => {
      this.applicant = data.data;
      console.log(this.applicant);
    })

    //skill
    this.skillService.getSkill().pipe(take(1)).subscribe((data: any) => {
      let res = data;
      this.skill = (res["data"]);
    })

    //skill filter
    this.jobService.getAllJob().pipe(take(1)).subscribe((data: any) => {
      this.jobList = data.data;
    })

  }

  showMaximizableDialog() {
    this.displayMaximizable = true;
  }

}


