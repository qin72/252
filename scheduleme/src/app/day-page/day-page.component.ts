
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-page',
  templateUrl: './day-page.component.html',
  styleUrls: ['./day-page.component.css']
})
export class DayPageComponent implements OnInit {

  addEventCategory: string;
  addEventName: string;

  categories=[
    'School',
    'Extracurriculars',
    'Social Events',
    'Other'
  ];

  @Input()
  dateClicked: Date;

  constructor() {

   }

  addEvent(){

  }

  ngOnInit() {

  }

}
