import { Component, OnInit, Input } from '@angular/core';
import { CalendarComponent } from '../calendar/calendar.component';
import { Event } from '../objects/event';
import * as firebase from 'firebase/app';
import {AuthService} from '../services/auth.service';
import { EventManipulationService } from '../services/event-manipulation.service';

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
  constructor(authS : AuthService,manEvent: EventManipulationService) { 
    this.uid=authS.getuid();
    this.manE=manEvent;
  }
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
      this.selectedDate= new Date(1524499387067);
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
