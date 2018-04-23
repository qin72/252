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

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AllEventComponent } from './all-event/all-event.component';
import { EventlistDisplayComponent } from './eventlist-display/eventlist-display.component';
import { CategoryEventComponent } from './category-event/category-event.component';
import {MatSelectModule} from '@angular/material/select';
import { TodayEventComponent } from './today-event/today-event.component';
import { EventManipulationService } from './services/event-manipulation.service';

import {}
import {
  MatAutocompleteModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatRadioModule,
  MatRippleModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
} from '@angular/material';

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
    MatProgressSpinnerModule,
    FormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
  ],
  providers: [AuthService, EventManipulationService],
  bootstrap: [AppComponent],
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,

  ]
})
export class AppModule { }
