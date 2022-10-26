import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { Applicant } from 'src/app/shared/models/applicant';

@Component({
  selector: 'app-profile-experience',
  templateUrl: './profile-experience.component.html',
  styleUrls: ['./profile-experience.component.css']
})
export class ProfileExperienceComponent implements OnInit {

  @Input('dataEdu') dataUser!: Applicant;
  
  constructor(private router: Router,
    private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    
  }

  onSubmit(){
    this.router.navigateByUrl('profile/experience/form')
  }

}
