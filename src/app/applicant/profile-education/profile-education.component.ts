import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Applicant } from 'src/app/shared/models/applicant';
import { Education } from 'src/app/shared/models/education';

@Component({
  selector: 'app-profile-education',
  templateUrl: './profile-education.component.html',
  styleUrls: ['./profile-education.component.css']
})
export class ProfileEducationComponent implements OnInit {

  @Input('dataEdu') dataEdu!: Education[];

  constructor(
    private router: Router,
    // public messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    // this.router.navigateByUrl('/profile/education/form')

  }

}
