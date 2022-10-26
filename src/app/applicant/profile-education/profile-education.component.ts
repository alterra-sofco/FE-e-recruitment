import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Applicant } from 'src/app/shared/models/applicant';

@Component({
  selector: 'app-profile-education',
  templateUrl: './profile-education.component.html',
  styleUrls: ['./profile-education.component.css']
})
export class ProfileEducationComponent implements OnInit {

  @Input('dataEdu') dataUser!: Applicant;

  constructor(
    private router: Router,
    // public messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.router.navigateByUrl('profile/education/form')
  }

}
