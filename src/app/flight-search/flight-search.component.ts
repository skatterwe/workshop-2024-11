import { DatePipe, NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CityPipe } from './city.pipe';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { Flight } from './flight-search.types';
import { FlightTypeaheadComponent } from './flight-typeahead/flight-typeahead.component';
import { FlightService } from './flight.service';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  templateUrl: './flight-search.component.html',
  styleUrl: './flight-search.component.css',
  imports: [FormsModule, NgClass, DatePipe, CityPipe, FlightCardComponent, FlightTypeaheadComponent],
})
export class FlightSearchComponent {
  flights: Flight[] = [];
  from = '';
  to = '';

  flightService = inject(FlightService);
  // userConfigService = inject(UserConfigService);

  basket: Record<number, boolean> = {};

  constructor() {
    // of({ id: 'FOO' })
    //   .pipe(distinctUntilChanged((prev, curr) => JSON.stringify(prev) === JSON.stringify(curr)))
    //   .subscribe();
    // of({ id: 123 }).pipe(distinctUntilChanged()).subscribe();
    // DON't DO THIS!
    // this.userConfigService.userConfig$.subscribe((config) => {
    //   this.config = config;
    // });
  }

  searchFlight() {
    // DON't DO THIS!
    // this.userConfigService.userConfig$.subscribe((config) => {
    //   this.flightService.searchFlights(this.from, this.to, config).subscribe((flights) => {
    //     this.flights = flights;
    //   });
    // })

    // DO THIS INSTEAD!
    // this.userConfigService.userConfig$.pipe(switchMap((config) => {
    //   return this.flightService.searchFlights(this.from, this.to)
    // })).subscribe((flights) => {
    //   this.flights = flights;
    // });

    this.flightService.searchFlights(this.from, this.to).subscribe((flights) => {
      this.flights = flights;
    });
  }

  onFlightSelectionChange(flightId: number, selected: boolean) {
    this.basket[flightId] = selected;
  }
}
