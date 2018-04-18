import { Component, OnInit } from '@angular/core';
import { AuthService} from '../services/auth.service';
import { Router } from '@angular/router';
import { CalendarEvent } from 'angular-calendar';
import { MatButtonModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  view: string = 'month';
  viewDate: Date = new Date();
  events: CalendarEvent[] = [];
  clickedDate: Date;

  constructor(public authS : AuthService,  private router : Router) { }

  ngOnInit() {
  }

  logout()
  {
    this.authS.logout();
    this.router.navigateByUrl('');
  }

  clickDay(clickedDate)
  {
      if (clickedDate){
        this.router.navigateByUrl('dayPage');
      }
  }

}
