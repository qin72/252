import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireAction } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
import {NgModule} from '@angular/core';
import {AuthService} from '../services/auth.service';
import { SortPipePipe } from '../sort-pipe.pipe';
import { EventlistDisplayComponent } from '../eventlist-display/eventlist-display.component';
import {MatSelectModule} from '@angular/material/select';
import * as firebase from 'firebase';

@Component({
  selector: 'app-catagory-event',
  templateUrl: './catagory-event.component.html',
  styleUrls: ['./catagory-event.component.css']
})
export class CatagoryEventComponent implements OnInit {

  uid = null;
  sortede$: any;
  catagory = "fklint"
  bycalled = 0;

  eventlist: Observable<Array<any>>;
  event: BehaviorSubject<string|null>;

  constructor(db : AngularFireDatabase, authS : AuthService) {
    this.uid = authS.getuid();
    console.log("UID: " + this.uid);
    this.event = new BehaviorSubject(null);
    this.eventlist = this.event.switchMap(cata =>
      db.list('Users/' + this.uid + '/events', ref =>
        cata ? ref.orderByChild('catagory').equalTo(cata) : ref
      ).valueChanges()
    );
    this.sortede$ = this.eventlist.map(items=>items.sort((l:any, r:any) => {
      if(l.date < r.date) { return -1; }
      if(l.date > r.date) { return 1; }
      return 0;
    }));
  }

  filterBy(eve) {
    this.bycalled = this.bycalled + 1;
    this.event.next(eve.value);
  }

  ngOnInit() {
  }


}
