import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, debounceTime, filter, map, shareReplay, switchMap } from 'rxjs';
import { Flight } from '../flight-search.types';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-flight-typeahead',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, AsyncPipe],
  templateUrl: './flight-typeahead.component.html',
  styleUrl: './flight-typeahead.component.css',
})
export class FlightTypeaheadComponent {
  flightService = inject(FlightService);

  formControl: FormControl<null | string> = new FormControl(null);

  flights$: Observable<Flight[]>;

  constructor() {
    this.flights$ = this.formControl.valueChanges.pipe(
      debounceTime(300),
      filter((searchValue: string | null) => !!searchValue),
      map((searchValue: string | null) => searchValue as string),
      switchMap((searchValue: string) => {
        return this.flightService.searchFlights(searchValue);
      }),
      shareReplay(1),
    );
  }
}
