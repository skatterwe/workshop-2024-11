import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../highlight.directive';
import { CityPipe } from './city.pipe';
import { Flight } from './flight-search.types';
import { FlightService } from './flight.service';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  imports: [CommonModule, FormsModule, HighlightDirective, CityPipe],
  templateUrl: './flight-search.component.html',
  styleUrl: './flight-search.component.css',
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
}
