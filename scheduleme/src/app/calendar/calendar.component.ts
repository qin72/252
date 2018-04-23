import { Component, OnInit } from '@angular/core';
import { AuthService} from '../services/auth.service';
import { Router, NavigationExtras } from '@angular/router';
import { CalendarEvent } from 'angular-calendar';




@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  uid = null;
  view: string = 'month';
  viewDate: Date = new Date();
  events: CalendarEvent[] = [];
  clickedDate: Date;

  constructor(public authS : AuthService,  private router : Router) {
    this.uid = authS.getuid();
  }

  ngOnInit() {

  }

  clickDay(clickedDate)
  {
      if (clickedDate){
        let navExt: NavigationExtras={
          queryParams: {
            "Date": clickedDate.getTime()
          }
        };
        this.router.navigate(['dayPage'], navExt);
      }
  }

}
