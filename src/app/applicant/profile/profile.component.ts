import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor( private primengConfig: PrimeNGConfig,) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;

  }

}
