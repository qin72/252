import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import {AuthService} from './services/auth.service';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './calendar/calendar.component'
import { AppRoutingModule } from './/app-routing.module';
import { CalendarModule } from 'angular-calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CalendarUtilsModule } from './calendarUtils/module';
import { DayPageComponent } from './day-page/day-page.component'

import { MatButtonModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import { AllEventComponent } from './all-event/all-event.component';
import { EventlistDisplayComponent } from './eventlist-display/eventlist-display.component';
import { CategoryEventComponent } from './category-event/category-event.component';
import {MatSelectModule} from '@angular/material/select';
import { TodayEventComponent } from './today-event/today-event.component';
import {MatDialogModule} from '@angular/material/dialog';
import { EventManipulationService } from './services/event-manipulation.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomeComponent,
    CalendarComponent,
    DayPageComponent,
    AllEventComponent,
    EventlistDisplayComponent,
    CategoryEventComponent,
    TodayEventComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
		AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot(),
    CalendarUtilsModule,
    MatButtonModule,
    MatTabsModule,
    MatToolbarModule,
    MatCardModule,
    MatExpansionModule,
    MatGridListModule,
    MatSelectModule,
    MatDialogModule
  ],
  providers: [AuthService, EventManipulationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
