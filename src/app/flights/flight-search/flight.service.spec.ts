import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { FlightService } from './flight.service';

describe('FlightService', () => {
  let service: FlightService;
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(FlightService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('searchFlights', () => {
    it('should call api with from value', () => {
      let result: any = undefined;
      service.searchFlights('FROM').subscribe((r) => (result = r));

      const req = testingController.expectOne('https://demo.angulararchitects.io/api/flight?from=FROM');
      req.flush('FLIGHTS');

      expect(result).toEqual('FLIGHTS' as any);
    });

    it('should call api with from and to if provided', () => {});
  });
});
