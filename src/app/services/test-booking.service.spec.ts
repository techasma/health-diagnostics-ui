import { TestBed } from '@angular/core/testing';

import { TestBookingService } from './test-booking.service';

describe('TestBookingService', () => {
  let service: TestBookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestBookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
