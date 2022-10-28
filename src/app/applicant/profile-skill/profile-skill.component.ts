import { ConstantPool } from '@angular/compiler';
import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Subscription, take } from 'rxjs';
import { Skill } from 'src/app/shared/models/skill';
import { ProfileService } from 'src/app/shared/services/profile.service';
import { SkillService } from 'src/app/shared/services/skill.service';

@Component({
  selector: 'app-profile-skill',
  templateUrl: './profile-skill.component.html',
  styleUrls: ['./profile-skill.component.css'],
  providers: [MessageService]
})
export class ProfileSkillComponent implements OnInit{

  subscription!: Subscription;
    //skill
    skillTree: Skill[]=[]
    selectedSkill!: Skill;
    skills!: Skill[];
  
  constructor(
    private skillService: SkillService,
    private profileService: ProfileService,
    private router: Router,
    public messageService: MessageService
    ) { }

    // skills: new FormControl('', [Validators.required, Validators.maxLength(50)]),

  ngOnInit(): void {
    this.profileService.getProfile().pipe(take(1)).subscribe((data:any) => {
      this.skillTree = data.data.skills;
    })

    this.skillService.getSkill().pipe(take(1)).subscribe((data:any) => {
      let skillTree: any = data;
      this.skills = skillTree.data;
    })

  }


  onSubmitSkill(){
    this.skillService.addSkill(this.selectedSkill).pipe(take(1)).subscribe(data => {
      this.messages('add skill', 'success', 'Success', '/profile/details');
    })

  }

  deleteSkill(skill: any){
    this.skillService.deleteSkill(skill.skillId).pipe(take(1)).subscribe(data => {
      this.messages('delete skill', 'success', 'Success', '/profile/details');
    })
  }

  messages(info: string, severity: string, summary: string, url: string) {
    this.messageService.add({
      key: 'notif',
      severity: severity,
      summary: summary,
      detail: info,
      life: 3000
    });
    setTimeout(() => {
      this.reload(url)
    }, 1300);
  }

  async reload(url: string): Promise<boolean> {
    await this.router.navigateByUrl('/', { skipLocationChange: true });
    return this.router.navigateByUrl(`${url}`);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
