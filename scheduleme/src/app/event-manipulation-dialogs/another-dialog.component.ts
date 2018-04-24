import { Component, OnInit, Inject } from '@angular/core';
import { Event } from '../objects/event';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';




@Component({
  selector: 'another-dialog',
  templateUrl: 'another-dialog.html',
})
export class AnotherDialog {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any) { }


}
