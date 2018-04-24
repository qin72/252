import { Component, OnInit, Inject } from '@angular/core';
import { Event } from '../objects/event';
import {MatDialog} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';

import {AuthService} from '../services/auth.service';
import {  AnotherDialog } from './another-dialog.component';
import {  OneDialog} from './one-dialog.component';

@Component({
  selector: 'app-event-manipulation-dialogs',
  templateUrl: './event-manipulation-dialogs.component.html',
  styleUrls: ['./event-manipulation-dialogs.component.css']
})
export class EventManipulationDialogsComponent implements OnInit {

  dailog: any;
  constructor(public dialog: MatDialog) {
    this.dialog = dialog;
  }

  ngOnInit() {
  }


  update_dialog(e) {

    var res;
    if(e != null){
      res = new Event(e.eventName,e.eDate,e.eventDesc, false, e.category, e.timestamp);
    } else {
      res = new Event(null, null, null, null, null, null);
    }
    let dialogRef = this.dialog.open(OneDialog, {
      width: '350px',
      data: { event: res }
    });

    return dialogRef.afterClosed();
  }


  remove_dialog() {
    var res;
    let dialogRef = this.dialog.open(AnotherDialog, {
      width: '250px',
      data: {a: "nah"}
    });

    return dialogRef.afterClosed();
  }
}
