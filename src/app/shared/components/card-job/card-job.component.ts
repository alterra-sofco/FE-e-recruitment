import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-job',
  templateUrl: './card-job.component.html',
  styleUrls: ['./card-job.component.css']
})
export class CardJobComponent implements OnInit {

  //modal
  displayMaximizable!: boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

  
  apply() {

  }

  showMaximizableDialog() {
    this.displayMaximizable = true;
}

}
