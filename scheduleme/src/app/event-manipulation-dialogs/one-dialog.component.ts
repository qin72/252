import { Component, OnInit, Inject } from '@angular/core';
import { Event } from '../objects/event';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'one-dialog',
  templateUrl: 'one-dialog.html',
})
export class OneDialog {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}
