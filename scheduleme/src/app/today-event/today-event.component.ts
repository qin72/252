import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import {AuthService} from '../services/auth.service';
import { EventlistDisplayComponent } from '../eventlist-display/eventlist-display.component';
import { NgSwitch } from '@angular/common';

@Component({
  selector: 'app-today-event',
  templateUrl: './today-event.component.html',
  styleUrls: ['./today-event.component.css']
})
export class TodayEventComponent implements OnInit {

  uid = null;
  events: any;
  sortede$: any;
  constructor(db : AngularFireDatabase, authS : AuthService) {
    this.uid = authS.getuid();
    var d = new Date();
    var start = d.getTime();
    d.setHours(0,0,0,0);
    d.setDate(d.getDate()+1);
    var end = d.getTime();
    this.events = db.list('Users/' + this.uid + '/events', ref => ref.orderByChild('eDate').startAt(start).endAt(end)).valueChanges();
    this.sortede$ = this.events.map(items=>items.sort((l:any, r:any) => {
      if(l.date < r.date) { return -1; }
      if(l.date > r.date) { return 1; }
      return 0;
    }));
  }

  ngOnInit() {
  }

}
