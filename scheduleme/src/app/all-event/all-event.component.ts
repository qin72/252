import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import {AuthService} from '../services/auth.service';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { Event } from '../objects/event';

@Component({
  selector: 'app-all-event',
  templateUrl: './all-event.component.html',
  styleUrls: ['./all-event.component.css']
})
export class AllEventComponent implements OnInit {
  uid = null;
  events: any;
  panelOpenState: boolean = false;
  constructor(db : AngularFireDatabase, authS : AuthService) {
    this.uid = authS.getuid();
    console.log("UID: " + this.uid)
    this.events = db.list('Users/' + this.uid + '/events', ref => ref.orderByChild('Date')).valueChanges();
  }

  ngOnInit() {
  }

  getdate(e) {
    return new Date(e);
  }

}
