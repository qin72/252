import { Component, OnInit, Inject } from '@angular/core';
import { Event } from '../objects/event';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'one-dialog',
  templateUrl: 'one-dialog.html',
})
export class OneDialog {
  time: string;
  date: string;
  updateTime(){
      var tt = new Date(this.date);
      if(this.time != null) {
        tt.setHours(Number(this.time.substring(0,2)), Number(this.time.substring(3,5)));
      } else {
        tt.setHours(23,59);
      }
      this.data.event.eDate = tt.getTime();
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    if(data.event.eDate != null){
      var temp = new Date(data.event.eDate);
      var hour = temp.getHours() < 10 ? '0' + temp.getHours() : temp.getHours();
      var minute = temp.getMinutes() < 10 ? '0' + temp.getMinutes() : temp.getMinutes();
      this.time = hour + ":" + minute;
      this.date = new Date(data.event.eDate).toString();
    }
  }
}
