import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { take } from 'rxjs';
import { Skill } from 'src/app/shared/models/skill';
import { SkillService } from 'src/app/shared/services/skill.service';
// import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})
export class ProfileUpdateComponent implements OnInit {

  //date
  date3!: Date;
  dates!: Date[];
  rangeDates!: Date[];
  minDate!: Date;
  maxDate!: Date;
  invalidDates!: Array<Date>

  //file
  uploadedFiles: any[] = [];

  //skill
  selectedSkill!: Skill;
  skills: Skill[]=[];

  constructor(
    private primengConfig: PrimeNGConfig,
    private router: Router,
    private skillService: SkillService,
    // private messageService: MessageService
  ) {

  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;

    //skill
    this.skillService.getSkill().pipe(take(1)).subscribe((data: any) => {
      let res = data
      this.skills = res["data"];
    })
    
    // date
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month - 1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;
    this.minDate = new Date();
    this.minDate.setMonth(prevMonth);
    this.minDate.setFullYear(prevYear);
    this.maxDate = new Date();
    this.maxDate.setMonth(nextMonth);
    this.maxDate.setFullYear(nextYear);

    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    this.invalidDates = [today, invalidDate];
  }

  onBasicUpload(event: any) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
    //  this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });
  }

  onSubmit(){
    this.router.navigateByUrl('profile/details')
  }

}
