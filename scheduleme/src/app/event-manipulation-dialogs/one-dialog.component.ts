import { Component, OnInit, Inject } from '@angular/core';
import { Event } from '../objects/event';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'one-dialog',
  templateUrl: 'one-dialog.html',
})
export class OneDialog {

  constructor(
    public dialogRef: MatDialogRef<OneDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
