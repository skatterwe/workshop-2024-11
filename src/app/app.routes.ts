import { Routes } from '@angular/router';
import { FLIGHTS_ROUTES } from './flights/flight.routes';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PassengersComponent } from './passengers/passengers.component';

export const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  ...FLIGHTS_ROUTES,
  { path: 'passengers', component: PassengersComponent },
  { path: '**', component: NotFoundComponent },
];
