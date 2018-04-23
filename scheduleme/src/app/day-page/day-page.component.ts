
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-day-page',
  templateUrl: './day-page.component.html',
  styleUrls: ['./day-page.component.css']
})
export class DayPageComponent implements OnInit {

  @Input()
  dateClicked: Date;

  constructor() { }


  addEvent(){
    console.log(this.dateClicked.getTime());
  }

  ngOnInit() {
  }

}
