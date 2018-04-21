import { Component, OnInit, Input } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { Event } from '../objects/event';

@Component({
  selector: 'app-eventlist-display',
  templateUrl: './eventlist-display.component.html',
  styleUrls: ['./eventlist-display.component.css']
})
export class EventlistDisplayComponent implements OnInit {

  @Input() events: any;
  ngOnInit() {
  }


}
