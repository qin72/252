import { Component, OnInit } from '@angular/core';
import { CalendarComponent } from '../calendar/calendar.component';
import { Event } from '../objects/event';
import * as firebase from 'firebase/app';
import {AuthService} from '../services/auth.service';

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
  constructor(authS : AuthService) { 
    this.uid=authS.getuid();

  }
 
  ngOnInit() {

    //this.selectedDate=this.cal.;
    this.getDayEvents();
  }
  getDayEvents()
    { 
      this.selectedDate= new Date(987654321);
      //this.uid='Ey87MebhkhcTpzlC85vIzj4qO3y2';
      //console.log(this.uid);
      var dateofEvent: Date;
      firebase.database().ref('Users/' + this.uid + '/events').once("value", snapshot => {
      this.eventsForUser = [];
      snapshot.forEach(childSnapshot => {
        /*
       dateofEvent=new Date(childSnapshot.val().date);
        if(dateofEvent.getFullYear()==this.selectedDate.getFullYear() && dateofEvent.getMonth() == this.selectedDate.getMonth() && dateofEvent.getDate()==this.selectedDate.getDate())  
        {
          console.log(childSnapshot.val().eventName);
          this.eventsForUser.push(new Event(childSnapshot.val().eventName, childSnapshot.val().eDate, childSnapshot.val().eventDesc, childSnapshot.val().isDone, childSnapshot.val().category));
        }*/
        
        console.log(childSnapshot.val().eventName);
          this.eventsForUser.push(new Event(childSnapshot.val().eventName, childSnapshot.val().date, childSnapshot.val().eventDesc, childSnapshot.val().isDone, childSnapshot.val().category));
        return false;
      });
    });
    /*
    this.eventsForUser.sort(function(a,b) {
        return (new Date(a.date).getTime() - new Date(b.date).getTime());
    });*/
  }
  deleteEvent()
  {

  }
  updateEvent()
  {
    
  }
  
  getdate(e) {
    return new Date(e);
  }
  editEvent(e)
  {

  }
}
