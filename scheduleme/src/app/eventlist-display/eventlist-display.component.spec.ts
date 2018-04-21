import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventlistDisplayComponent } from './eventlist-display.component';

describe('EventlistDisplayComponent', () => {
  let component: EventlistDisplayComponent;
  let fixture: ComponentFixture<EventlistDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventlistDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventlistDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
