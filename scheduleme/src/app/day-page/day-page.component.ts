import { Component, OnInit, Input } from '@angular/core';
import { CalendarComponent } from '../calendar/calendar.component';
import { Event } from '../objects/event';
import * as firebase from 'firebase/app';
import {AuthService} from '../services/auth.service';
import { EventManipulationService } from '../services/event-manipulation.service';
import { ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-day-page',
  templateUrl: './day-page.component.html',
  styleUrls: ['./day-page.component.css']
})
export class DayPageComponent implements OnInit {
  selectedDate: Date;
  uid;
  eventsForUser: Event[];
  cal:CalendarComponent;
  renderEdit=false;
  manE;
  eventEditing: Event;
  constructor(authS : AuthService,manEvent: EventManipulationService, private route: ActivatedRoute) { 
    this.uid=authS.getuid();
    this.manE=manEvent;
    this.route.queryParams.subscribe(params =>{
      this.dateClicked = params["Date"];
    })
  }
  addEventCategory: string;
  addEventName: string;

  categories=[
    'School',
    'Extracurriculars',
    'Social Events',
    'Other'
  ];

  dateClicked: Date;

  addEvent(){

  }

  ngOnInit() {
    this.getDayEvents();
  }
  deleteEvent(e)
  {
    this.manE.delete(e.timestamp);
    this.getDayEvents();
  }

  getDayEvents()
    { 
      this.selectedDate= new Date(this.dateClicked);
      //this.uid='Ey87MebhkhcTpzlC85vIzj4qO3y2';
      //console.log(this.uid);
      var dateofEvent: Date;
      firebase.database().ref('Users/' + this.uid + '/events').once("value", snapshot => {
      this.eventsForUser = [];
      snapshot.forEach(childSnapshot => {
       dateofEvent=new Date(childSnapshot.val().eDate);
        if(this.selectedDate.toDateString() == dateofEvent.toDateString())  
        {
          console.log(childSnapshot.val().eventName);
          this.eventsForUser.push(new Event(childSnapshot.val().eventName, childSnapshot.val().eDate, childSnapshot.val().eventDesc, childSnapshot.val().isDone, childSnapshot.val().category,childSnapshot.val().timestamp));
        }
        /*
        console.log(childSnapshot.val().eventName); 
          this.eventsForUser.push(new Event(childSnapshot.val().eventName, childSnapshot.val().eDate, childSnapshot.val().eventDesc, childSnapshot.val().isDone, childSnapshot.val().category,childSnapshot.val().timestamp));
        */return false;
      });
    });
    if(this.eventsForUser!=undefined)
    {
      this.eventsForUser.sort(function(a,b) {
        return (new Date(a.eDate).getTime() - new Date(b.eDate).getTime());
    });
    }
   
  }

  updateEvent()
  {
    console.log(this.eventEditing.eventName);
    console.log(this.eventEditing.eventDesc);
    console.log(this.eventEditing.eDate);
    console.log(this.eventEditing.category);
    console.log(this.eventEditing.timestamp);
    this.renderEdit=false;
  }
  
  getdate(e) {
    return new Date(e);
  }
  editEvent(e)
  {
    this.renderEdit=true;
    this.eventEditing=e;
  }
}
