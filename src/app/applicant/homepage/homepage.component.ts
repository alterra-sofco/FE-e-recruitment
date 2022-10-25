import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Skill } from 'src/app/shared/models/skill';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  value3: string = '';
  //modal
  displayMaximizable!: boolean;

  //filter
  selectedSkill!: Skill;
  skill: Skill[];

  selectedJob!: any;
  job: any[];

  constructor(
    private primengConfig: PrimeNGConfig,
  ) {
    this.skill = [
      { name: 'Phyton', code: 'AU' },
      { name: 'Golang', code: 'BR' },
      { name: 'Java', code: 'CN' },
      { name: 'JMarketing', code: 'EG' },
    ];

    this.job = [
      { name: 'Software Developer', code: 'AU' },
      { name: 'Marketing', code: 'BR' },
      { name: 'Bussiness Development', code: 'CN' },
    ];

  }

  ngOnInit() {
    this.primengConfig.ripple = true;

  }

  apply() {

  }

  showMaximizableDialog() {
    this.displayMaximizable = true;
}


}


