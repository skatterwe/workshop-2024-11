import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlightBookingComponentDataService } from '../flight-booking-component-data.service';

@Component({
  selector: 'app-flight-passenger-info-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './flight-passenger-info-form.component.html',
  styleUrl: './flight-passenger-info-form.component.css',
})
export class FlightPassengerInfoFormComponent {
  // Options 1
  dataService = inject(FlightBookingComponentDataService);

  // Option 2
  // @Input({ required: true }) _formGroup!: FormGroup;
}
