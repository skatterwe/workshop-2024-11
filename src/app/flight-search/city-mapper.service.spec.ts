import { TestBed } from '@angular/core/testing';

import { CityMapperService } from './city-mapper.service';

describe('CityMapperService', () => {
  let service: CityMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
