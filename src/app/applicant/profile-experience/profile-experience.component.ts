import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-experience',
  templateUrl: './profile-experience.component.html',
  styleUrls: ['./profile-experience.component.css']
})
export class ProfileExperienceComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  onSubmit(){
    this.router.navigateByUrl('profile/experience/form')
  }

}
