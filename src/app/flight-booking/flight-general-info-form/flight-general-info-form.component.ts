import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FlightBookingComponentDataService } from '../flight-booking-component-data.service';

@Component({
  selector: 'app-flight-general-info-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './flight-general-info-form.component.html',
  styleUrl: './flight-general-info-form.component.css',
})
export class FlightGeneralInfoFormComponent {
  // Option 1
  dataService = inject(FlightBookingComponentDataService);

  // Option 2
  // @Input({ required: true }) _formGroup!: FormGroup;
}
