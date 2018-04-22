import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import { AuthService} from '../services/auth.service';
import { Router } from '@angular/router';
import { CalendarEvent } from 'angular-calendar';
import { MatButtonModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { AllEventComponent } from '../all-event/all-event.component';
import { CatagoryEventComponent } from '../catagory-event/catagory-event.component';
import { TodayEventComponent } from '../today-event/today-event.component';
import { CalendarComponent } from '../calendar/calendar.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgSwitch } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectedIndex: number = 0;
  constructor(public authS : AuthService,  private router : Router, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    if(this.authS.getuid() == 0) {  this.router.navigateByUrl(''); }
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  logout()
  {
    this.authS.logout();
    this.router.navigateByUrl('');

  }


}
