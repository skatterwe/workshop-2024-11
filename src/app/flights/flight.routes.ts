import { Routes } from '@angular/router';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';

export const FLIGHTS_ROUTES: Routes = [
  { path: '', redirectTo: 'flight-search', pathMatch: 'full' },
  { path: 'flight-search', component: FlightSearchComponent, pathMatch: 'full' },
  {
    path: 'flight-search/:id',
    component: FlightBookingComponent,
  },
];
