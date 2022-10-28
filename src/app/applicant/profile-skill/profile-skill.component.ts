import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {take} from 'rxjs';
import {Skill} from 'src/app/shared/models/skill';
import {ProfileService} from 'src/app/shared/services/profile.service';
import {SkillService} from 'src/app/shared/services/skill.service';

@Component({
  selector: 'app-profile-skill',
  templateUrl: './profile-skill.component.html',
  styleUrls: ['./profile-skill.component.css']
})
export class ProfileSkillComponent implements OnInit {

  //skill
  skillTree: Skill[] = []
  selectedSkill!: Skill;
  skills!: Skill[];

  constructor(
    private skillService: SkillService,
    private profileService: ProfileService,
    private router: Router
  ) {
  }

  // skills: new FormControl('', [Validators.required, Validators.maxLength(50)]),

  ngOnInit(): void {
    this.profileService.getProfile().pipe(take(1)).subscribe((data: any) => {
      this.skillTree = data.data.skills;
    })

    this.skillService.getSkill().pipe(take(1)).subscribe((data: any) => {
      let skillTree: any = data;
      this.skills = skillTree.data;
    })

  }


  onSubmitSkill() {
    this.skillService.addSkill(this.selectedSkill).pipe(take(1)).subscribe(data => {
      alert("add skill");
      this.router.navigateByUrl("/profile/details");
    })

  }

  async deleteSkill(skill: any) {
    this.skillService.deleteSkill(skill.skillId).pipe(take(1)).subscribe(data => {
      alert("deleted");
      this.router.navigateByUrl("/profile/details").finally;
    })
  }
}
