import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import { AuthService} from '../services/auth.service';
import { Router } from '@angular/router';
import { CalendarEvent } from 'angular-calendar';
import { MatButtonModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { AllEventComponent } from '../all-event/all-event.component';
import { CategoryEventComponent } from '../category-event/category-event.component';
import { TodayEventComponent } from '../today-event/today-event.component';
import { CalendarComponent } from '../calendar/calendar.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { EventManipulationService } from '../services/event-manipulation.service';
import { NgSwitch } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sound:boolean = false;
  selectedIndex: number = 0;
  constructor(private eMan : EventManipulationService, public authS : AuthService,  private router : Router, private cdr: ChangeDetectorRef) {
    this.eMan = eMan;
  }

  ngOnInit() {
    if(this.authS.getuid() == 0) {  this.router.navigateByUrl(''); }
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
    this.eMan.new_user();
  }

  play() {
    let audioPlayer: HTMLMediaElement = <HTMLMediaElement>document.getElementById('sound');
    if(!this.sound) {     audioPlayer.play(); this.sound = true;}
    else {audioPlayer.pause(); this.sound = false;}
  }

  logout()
  {
    this.authS.logout();
    this.router.navigateByUrl('');

  }


}
