import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, filter, map, switchMap } from 'rxjs';
import { Flight } from '../flight-search.types';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-flight-typeahead',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './flight-typeahead.component.html',
  styleUrl: './flight-typeahead.component.css',
})
export class FlightTypeaheadComponent {
  flightService = inject(FlightService);

  formControl: FormControl<null | string> = new FormControl(null);

  constructor() {
    this.formControl.valueChanges
      .pipe(
        debounceTime(300),
        filter((searchValue: string | null) => !!searchValue),
        map((searchValue: string | null) => searchValue as string),
        switchMap((searchValue: string) => {
          return this.flightService.searchFlights(searchValue);
        }),
      )
      .subscribe((flights: Flight[]) => {
        console.log(flights);
      });
  }
}
