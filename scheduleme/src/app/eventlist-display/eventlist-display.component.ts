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
  option = {  hour12: false, weekday: 'short', year: 'numeric', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' };
  @Input() events: Array<any>;
  ngOnInit() {
  }

    getdate(e) {
      return new Date(e).toLocaleDateString('en-US', this.option);
    }

}
