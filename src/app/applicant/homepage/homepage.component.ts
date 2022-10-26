import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { take } from 'rxjs';
import { Skill } from 'src/app/shared/models/skill';
import { SkillService } from 'src/app/shared/services/skill.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  value3: string = '';

  //filter
  selectedSkill!: Skill;
  skill: Skill[] = [];

  selectedJob!: any;
  job: any[];

  constructor(
    private primengConfig: PrimeNGConfig,
    private skillService: SkillService,
  ) {

    this.job = [
    ];

  }

  ngOnInit() {
    this.primengConfig.ripple = true;

    //skill
    this.skillService.getSkill().pipe(take(1)).subscribe((data: any) => {
      let res = data;
      this.skill = (res["data"]);
    })

  }

}


