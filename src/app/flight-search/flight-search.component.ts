import { DatePipe, NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CityPipe } from './city.pipe';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { Flight } from './flight-search.types';
import { FlightService } from './flight.service';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  templateUrl: './flight-search.component.html',
  styleUrl: './flight-search.component.css',
  imports: [FormsModule, NgClass, DatePipe, CityPipe, FlightCardComponent],
})
export class FlightSearchComponent {
  flights: Flight[] = [];
  from = '';
  to = '';

  flightService = inject(FlightService);

  selectedFlight: number | null = null;

  searchFlight() {
    this.flightService.searchFlights(this.from, this.to).subscribe((flights) => {
      this.flights = flights;
    });
  }

  select(flight: Flight) {
    this.selectedFlight = flight.id;
  }

  onFlightSelectionChange(flightId: number, selected: boolean) {
    if (selected) {
      this.selectedFlight = flightId;
    } else {
      this.selectedFlight = null;
    }
  }
}
