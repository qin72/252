import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventManipulationDialogsComponent } from './event-manipulation-dialogs.component';

describe('EventManipulationDialogsComponent', () => {
  let component: EventManipulationDialogsComponent;
  let fixture: ComponentFixture<EventManipulationDialogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventManipulationDialogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventManipulationDialogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
