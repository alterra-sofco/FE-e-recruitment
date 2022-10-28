import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { Subscription, take } from 'rxjs';
import { Applicant } from 'src/app/shared/models/applicant';
import { Education } from 'src/app/shared/models/education';
import { Experience } from 'src/app/shared/models/experience';
import { ExperienceService } from 'src/app/shared/services/experience.service';
import { ProfileService } from 'src/app/shared/services/profile.service';

@Component({
  selector: 'app-profile-experience',
  templateUrl: './profile-experience.component.html',
  styleUrls: ['./profile-experience.component.css'],
  providers: [MessageService]
})
export class ProfileExperienceComponent implements OnInit {

  @Input('dataExp') dataExp!: Experience[];
  subscription!: Subscription;
  
  constructor(private router: Router,
    private experienceService: ExperienceService,
    private profileService: ProfileService,
    private primengConfig: PrimeNGConfig,
    public messageService: MessageService
    ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;

    if(!this.dataExp) this.profileService.getProfile().pipe(take(1)).subscribe(data=> {
      let param = data.data.experiences;
      this.dataExp = param;
    })
    
  }

  deleteExp(exp: Experience){
    this.experienceService.deleteExperience(exp.experienceId).pipe(take(1)).subscribe((data:any) => {
      if (data.status == 200) {
        this.messages('delete experience', 'success', 'Success', '/profile/details');
      } else {
        this.messages(data.message, 'warn', 'Warn', '/profile/details');
      }
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
      this.reload(url);
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
