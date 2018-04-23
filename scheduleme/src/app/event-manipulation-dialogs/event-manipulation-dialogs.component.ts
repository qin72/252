import { Component, OnInit, Inject } from '@angular/core';
import { Event } from '../objects/event';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
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


  add_dialog() {
    var res;
    let dialogRef = this.dialog.open(OneDialog, {
      width: '350px',
      data: { event: new Event() }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      res = result;
    });
    return res;
  }


  update_dialog(e) {
    var res;
    let dialogRef = this.dialog.open(OneDialog, {
      width: '350px',
      data: { event: e }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      res = result;
    });
    return res;
  }


  remove_dialog() {
    var res;
    let dialogRef = this.dialog.open(AnotherDialog, {
      width: '250px',
      data: {a: "nah"}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      res = result;
    });

    return res;
  }
}
