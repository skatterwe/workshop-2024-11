import { DatePipe, NgClass } from '@angular/common';
import { Component, DestroyRef, OnDestroy, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { FlightDetailComponent } from '../flight-detail/flight-detail.component';
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
  imports: [
    FormsModule,
    NgClass,
    DatePipe,
    CityPipe,
    FlightCardComponent,
    FlightTypeaheadComponent,
    FlightDetailComponent,
    ReactiveFormsModule,
  ],
})
export class FlightSearchComponent implements OnDestroy {
  flights: Flight[] = [];
  from = '';
  to = '';

  flightService = inject(FlightService);
  // userConfigService = inject(UserConfigService);
  destroyRef = inject(DestroyRef);

  basket: Record<number, boolean> = {};

  flightId = new FormControl();

  withDetail = false;

  private subs: Subscription[] = [];
  private untilDestroy$: Subject<void> = new Subject();

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
    // DON'T DO THIS!
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

    const flights$ = this.flightService.searchFlights(this.from, this.to);

    this.subs.push(
      flights$.subscribe((flights) => {
        this.flights = flights;
      }),
    );

    flights$.pipe(takeUntil(this.untilDestroy$)).subscribe((flights) => {
      this.flights = flights;
    });

    flights$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((flights) => {
      this.flights = flights;
    });
  }

  onFlightSelectionChange(flightId: number, selected: boolean) {
    this.basket[flightId] = selected;
  }

  ngOnDestroy() {
    // OPTION 1 - unsubscribe
    this.subs.forEach((s) => s.unsubscribe());

    // OPTION 2 - unsubscribe
    this.untilDestroy$.next();
  }
}
