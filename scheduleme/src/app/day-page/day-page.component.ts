
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-day-page',
  templateUrl: './day-page.component.html',
  styleUrls: ['./day-page.component.css']
})
export class DayPageComponent implements OnInit {

  addEventCategory: string;
  addEventName: string;

  dateClicked: Date;

  categories=[
    'School',
    'Extracurriculars',
    'Social Events',
    'Other'
  ];



  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params =>{
      this.dateClicked = params["Date"];
    })
   }

  addEvent(){

  }

  ngOnInit() {

  }

}
