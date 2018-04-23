import { TestBed, inject } from '@angular/core/testing';

import { EventManipulationService } from './event-manipulation.service';

describe('EventManipulationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventManipulationService]
    });
  });

  it('should be created', inject([EventManipulationService], (service: EventManipulationService) => {
    expect(service).toBeTruthy();
  }));
});
