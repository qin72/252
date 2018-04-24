import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import {AuthService} from '../services/auth.service';
import { EventlistDisplayComponent } from '../eventlist-display/eventlist-display.component';
import { NgSwitch } from '@angular/common';



@Component({
  selector: 'app-all-event',
  templateUrl: './all-event.component.html',
  styleUrls: ['./all-event.component.css']
})
export class AllEventComponent implements OnInit {
  uid = null;
  events: any;
  sortede$: any;
  authS: any;
  constructor(db : AngularFireDatabase, authS : AuthService) {
    this.authS = authS;
    this.uid = authS.getuid();
    this.events = db.list('Users/' + this.uid + '/events', ref => ref.orderByChild('Date')).valueChanges();
    this.sortede$ = this.events.map(items=>items.sort((l:any, r:any) => {
      if(l.date < r.eDate) { return -1; }
      if(l.date > r.eDate) { return 1; }
      return 0;
    }));
  }

  ngOnInit() {
  }


}
