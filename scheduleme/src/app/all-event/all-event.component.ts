import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import {AuthService} from '../services/auth.service';
import { SortPipePipe } from '../sort-pipe.pipe';
import { EventlistDisplayComponent } from '../eventlist-display/eventlist-display.component';




@Component({
  selector: 'app-all-event',
  templateUrl: './all-event.component.html',
  styleUrls: ['./all-event.component.css']
})
export class AllEventComponent implements OnInit {
  uid = null;
  events: any;
  sortede$: any;
  constructor(db : AngularFireDatabase, authS : AuthService) {
    this.uid = authS.getuid();
    console.log("UID: " + this.uid);
    this.events = db.list('Users/' + this.uid + '/events', ref => ref.orderByChild('Date')).valueChanges();
    this.sortede$ = this.events.map(items=>items.sort((l:any, r:any) => {
      if(l.date < r.date) { return -1; }
      if(l.date > r.date) { return 1; }
      return 0;
    }));
  }

  ngOnInit() {
  }

  getdate(e) {
    return new Date(e);
  }

}
