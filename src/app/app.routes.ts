import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PassengersComponent } from './passengers/passengers.component';

export const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'flights', loadChildren: () => import('./flights/flight.routes').then((m) => m.FLIGHTS_ROUTES) },
  { path: 'passengers', component: PassengersComponent },
  { path: '**', component: NotFoundComponent },
];
