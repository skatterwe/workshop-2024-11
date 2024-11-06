import { TestBed } from '@angular/core/testing';

import { FlightBookingComponentDataService } from './flight-booking-component-data.service';

describe('FlightBookingComponentDataService', () => {
  let service: FlightBookingComponentDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightBookingComponentDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
