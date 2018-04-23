import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireAction } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
import {NgModule} from '@angular/core';
import {AuthService} from '../services/auth.service';
import { EventlistDisplayComponent } from '../eventlist-display/eventlist-display.component';
import {MatSelectModule} from '@angular/material/select';
import * as firebase from 'firebase';
import { Event } from '../objects/event';

@Injectable()
export class EventManipulationService {
  authS: any;
  db: any;
  constructor(db : AngularFireDatabase, authS : AuthService) {
    this.authS = authS;
    this.db=db;
  }
  delete(ts) {
    this.db.object('Users/' + this.authS.getuid() + '/events/' + ts
    ).remove();
  }
  add(event : Event) {
    this.db.object('Users/' + this.authS.getuid() + '/events/' + event.timestamp).update(event);
  }
  update(event: Event) {
    this.delete(event.timestamp);
    this.add(event);
  }
  new_user() {
    const user = this.db.object('Users/' + this.authS.getuid()).valueChanges();
    user.subscribe(data => {
      if(data==null) {
        this.db.object('Users/' + this.authS.getuid()).update({events: 0});
        alert("New user " + this.authS.getuid()  + "created!!");
      }
    });
  }

}
