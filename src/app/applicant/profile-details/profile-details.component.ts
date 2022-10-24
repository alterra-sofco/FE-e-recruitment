import { Component, OnInit } from '@angular/core';
import { Applicant } from 'src/app/shared/models/applicant';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {

  applicant!: Applicant;
  constructor() { }

  ngOnInit(): void {
  }

}
