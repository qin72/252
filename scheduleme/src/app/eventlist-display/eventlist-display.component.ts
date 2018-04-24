import { Component, OnInit, Input } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import { HostListener } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { AngularFireDatabase, AngularFireAction } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { EventManipulationService } from '../services/event-manipulation.service';
import { Subscription } from 'rxjs/Subscription';
import { MatButtonModule } from '@angular/material';
import { EventManipulationDialogsComponent } from '../event-manipulation-dialogs/event-manipulation-dialogs.component';



import { Event } from '../objects/event';

@Component({
  selector: 'app-eventlist-display',
  templateUrl: './eventlist-display.component.html',
  styleUrls: ['./eventlist-display.component.css']
})
export class EventlistDisplayComponent implements OnInit {
  innerWidth: number;
  db: any;
  authS:any;
  eMan : any;
  dia: any;
  option = {  hour12: false, weekday: 'short', year: 'numeric', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' };


  @Input() events: Array<any>;
  constructor(eMan : EventManipulationService, authS : AuthService, db : AngularFireDatabase, dia: EventManipulationDialogsComponent) {
    this.eMan = eMan;
    this.authS = authS;
    this.db = db;
    this.dia = dia;
  }
  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }
  ngAfterViewInit() {
    if(document.getElementById('eventdesc') != null) {
       document.getElementById('eventdesc').style.overflow = 'scroll';
    }
   }
    getdate(e) {
      if(this.innerWidth < 500) {
        var p = new Date(e);
        var now = new Date();
        var days = Math.floor((p.getTime() - now.getTime())/(3600000*24));
        var postfix: string;
        if(days < 0) { postfix = " days past";}
        else { postfix = " days left"; }
        return days + postfix;
      }
      return new Date(e).toLocaleDateString('en-US', this.option);
    }

    getdesc(t) {
      if(t==null){return  ""}
      var lines = Math.floor(((this.innerWidth*0.2-0.8)*3+1)/14);
      var line = ".{" + lines + "}" ;
      var re = new RegExp(line,"g");
      return t.replace(re, "$&" + "\r\n");
    }
    getCata(d) {
      if(this.innerWidth < 500) { return ""; }
      return d;
    }
    @HostListener('window:resize', ['$event'])
    onResize(event) {
      this.innerWidth = window.innerWidth;
    }
    add_sample() {
      var t = new Date();
      t.setHours(t.getHours()+2);
      this.eMan.add(new Event('Sample', t.getTime(), 'only for test', true, "School", new Date().getTime()));
    }

    update(oe) {
      if(oe == null){ oe = new Event(null, null, null, null, null,null)}
      this.dia.update_dialog(oe).subscribe(res => {
        if(res.eventDesc == null) { res.eventDesc = " ";}
        console.log("Name: " + res.eventName + ", Date: " + res.eDate + ", category: " + res.category);
        if(res != undefined && res.eventName != null && res.eDate != null && res.category != null) {alert("Added");this.eMan.add(res);}
        else {
          alert('Invalid submit, no change made!')}
      });
    }


    delete(ts) {

      var r = this.dia.remove_dialog();
      r.subscribe(res => {
        console.log(res);
        if(res) { this.eMan.delete(ts); }
      });

    }
}
