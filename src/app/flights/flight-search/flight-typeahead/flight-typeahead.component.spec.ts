import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { FlightService } from '../flight.service';
import { FlightTypeaheadComponent } from './flight-typeahead.component';

describe('FlightTypeaheadComponent', () => {
  let component: FlightTypeaheadComponent;
  let fixture: ComponentFixture<FlightTypeaheadComponent>;

  let flightService: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightTypeaheadComponent],
      providers: [
        {
          provide: FlightService,
          useValue: {
            searchFlights: jasmine.createSpy('searchFlights').and.returnValue(of('FLIGHTS')),
          },
        },
      ],
    })
      .overrideComponent(FlightTypeaheadComponent, {
        set: {
          imports: [ReactiveFormsModule, CommonModule],
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(FlightTypeaheadComponent);
    component = fixture.componentInstance;

    flightService = TestBed.inject(FlightService);
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should load flights on value change and display', fakeAsync(() => {
    fixture.detectChanges();

    component.formControl.patchValue('SEARCH_VALUE');
    tick(300);

    expect(flightService.searchFlights).toHaveBeenCalledWith('SEARCH_VALUE');

    fixture.detectChanges();

    const elem = fixture.debugElement.query(By.css('[data-testid="flights-display"]'));
    expect(elem.nativeElement.textContent).toContain('FLIGHTS');
  }));
});
