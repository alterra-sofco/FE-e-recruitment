import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  value3: string = '';

  selectedCountries!: Country;
  countries: Country[];

  selectedJob!: any;
  job: any[];

  constructor(
    private primengConfig: PrimeNGConfig,
  ) {
    this.countries = [
      { name: 'Jawa Barat', code: 'AU' },
      { name: 'Jawa Timur', code: 'BR' },
      { name: 'Jawa Tengah', code: 'CN' },
      { name: 'Jakarta', code: 'EG' },
    ];

    this.job = [
      { name: 'Software Developer', code: 'AU' },
      { name: 'Marketing', code: 'BR' },
      { name: 'Bussiness Development', code: 'CN' },
    ];

  }

  ngOnInit() {
    this.primengConfig.ripple = true;

  }

  apply() {

  }


}


interface Country {
  name: string;
  code: string;
}