import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightPassengerInfoFormComponent } from './flight-passenger-info-form.component';

describe('FlightPassengerInfoFormComponent', () => {
  let component: FlightPassengerInfoFormComponent;
  let fixture: ComponentFixture<FlightPassengerInfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightPassengerInfoFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlightPassengerInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
