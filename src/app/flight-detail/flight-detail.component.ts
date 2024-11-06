import { JsonPipe } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { debounceTime, filter, Observable, switchMap } from 'rxjs';
import { Flight } from '../flight-search/flight-search.types';
import { FlightService } from '../flight-search/flight.service';

@Component({
  selector: 'app-flight-detail',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './flight-detail.component.html',
  styleUrl: './flight-detail.component.css',
})
export class FlightDetailComponent implements OnInit {
  @Input({ required: true }) flightId$!: Observable<number>;

  flightService = inject(FlightService);

  flight: Flight | null = null;

  ngOnInit() {
    this.flightId$
      .pipe(
        debounceTime(400),
        filter((searchValue) => !!searchValue),
        switchMap((id) => this.flightService.getFlightById(id)),
      )
      .subscribe((flight) => {
        this.flight = flight;
      });

    this.flightService.getFlightById(340).subscribe((flight) => {
      console.log('FLIGHT WITH ID 430');
    });
  }
}
