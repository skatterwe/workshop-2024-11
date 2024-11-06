import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightGeneralInfoFormComponent } from './flight-general-info-form.component';

describe('FlightGeneralInfoFormComponent', () => {
  let component: FlightGeneralInfoFormComponent;
  let fixture: ComponentFixture<FlightGeneralInfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightGeneralInfoFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlightGeneralInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
