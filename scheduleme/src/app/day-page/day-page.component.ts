
import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Event } from '../objects/event';
import { Location } from '@angular/common';
import { EventManipulationService } from '../services/event-manipulation.service';

@Component({
  selector: 'app-day-page',
  templateUrl: './day-page.component.html',
  styleUrls: ['./day-page.component.css']
})
export class DayPageComponent implements OnInit {

  addEventCategory: string;
  addEventName: string;

  dateClicked: Date;
  tempDate: Date;

  newEvent: Event;

  categories=[
    'School',
    'Extracurriculars',
    'Social Events',
    'Other'
  ];


  constructor(private route: ActivatedRoute, private router: Router, private eventDatebase: EventManipulationService) {
    this.route.queryParams.subscribe(params =>{
      this.dateClicked = params["Date"];
    })
   }

  addEvent(){
    alert("Event Added");

    this.tempDate = new Date(this.dateClicked);

    this.newEvent = new Event();
    this.newEvent.eventName = this.addEventName;
    this.newEvent.category = this.addEventCategory;
    this.newEvent.eDate = this.tempDate.getTime();

    this.eventDatebase.add(this.newEvent);

    this.newEvent = null;
    this.addEventCategory = null;
    this.addEventName = null;

  }

  ngOnInit() {

  }

}
