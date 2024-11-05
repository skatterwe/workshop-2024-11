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

  basket: Record<number, boolean> = {};

  searchFlight() {
    this.flightService.searchFlights(this.from, this.to).subscribe((flights) => {
      this.flights = flights;
    });
  }

  onFlightSelectionChange(flightId: number, selected: boolean) {
    this.basket[flightId] = selected;
  }
}
