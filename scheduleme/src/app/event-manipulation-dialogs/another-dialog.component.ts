import { Component, OnInit, Inject } from '@angular/core';
import { Event } from '../objects/event';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';




@Component({
  selector: 'another-dialog',
  templateUrl: 'another-dialog.html',
})
export class AnotherDialog {

  constructor(
    public dialogRef: MatDialogRef<AnotherDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
