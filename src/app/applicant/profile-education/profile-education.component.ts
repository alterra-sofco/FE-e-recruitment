import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-education',
  templateUrl: './profile-education.component.html',
  styleUrls: ['./profile-education.component.css']
})
export class ProfileEducationComponent implements OnInit {

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
