import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FlightBookingComponentDataService } from './flight-booking-component-data.service';
import { FlightGeneralInfoFormComponent } from './flight-general-info-form/flight-general-info-form.component';
import { FlightPassengerInfoFormComponent } from './flight-passenger-info-form/flight-passenger-info-form.component';

@Component({
  selector: 'app-flight-booking',
  standalone: true,
  imports: [ReactiveFormsModule, FlightGeneralInfoFormComponent, FlightPassengerInfoFormComponent, JsonPipe],
  providers: [FlightBookingComponentDataService],
  templateUrl: './flight-booking.component.html',
  styleUrl: './flight-booking.component.css',
})
export class FlightBookingComponent {
  dataService = inject(FlightBookingComponentDataService);
  route = inject(ActivatedRoute);

  constructor() {
    this.route.paramMap.pipe(takeUntilDestroyed()).subscribe((params) => {
      this.dataService.generalInfoForm.patchValue({ flightNo: params.get('id') ?? '' });
      this.dataService.generalInfoForm.disable();
    });
  }

  onSubmit() {
    console.log(this.dataService.formGroup);
  }
}
