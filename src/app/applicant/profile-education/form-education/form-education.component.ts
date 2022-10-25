import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Degree } from 'src/app/shared/models/education';

@Component({
  selector: 'app-form-education',
  templateUrl: './form-education.component.html',
  styleUrls: ['./form-education.component.css']
})
export class FormEducationComponent implements OnInit {

  //date
  dateStart!: Date;
  dateEnd!: Date;
  dates!: Date[];
  rangeDates!: Date[];
  minDate!: Date;
  maxDate!: Date;
  invalidDates!: Array<Date>

  //degree
  degrees!: Degree[];
  selectedDegree!: Degree;

  constructor(
    private router: Router,
  ) { 
    this.degrees = [
      { name: 'UnderGraduate' },
      { name: 'PostGraduate'},
    ];
  }

  ngOnInit(): void {
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

  onSubmit(){
    this.router.navigateByUrl('profile/details')
  }

}
