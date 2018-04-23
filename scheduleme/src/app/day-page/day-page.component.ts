
import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Event } from '../objects/event';
import { Location } from '@angular/common';

@Component({
  selector: 'app-day-page',
  templateUrl: './day-page.component.html',
  styleUrls: ['./day-page.component.css']
})
export class DayPageComponent implements OnInit {

  addEventCategory: string;
  addEventName: string;

  dateClicked: Date;

  newEvent: Event;

  categories=[
    'School',
    'Extracurriculars',
    'Social Events',
    'Other'
  ];


  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params =>{
      this.dateClicked = params["Date"];
    })
   }

  addEvent(){
    alert("Event Added");

  }

  ngOnInit() {

  }

}
