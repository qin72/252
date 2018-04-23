import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatagoryEventComponent } from './catagory-event.component';

describe('CatagoryEventComponent', () => {
  let component: CatagoryEventComponent;
  let fixture: ComponentFixture<CatagoryEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatagoryEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatagoryEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
