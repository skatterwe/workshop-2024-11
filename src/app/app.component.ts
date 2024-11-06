import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/navbar/navbar.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { FlightBookingComponent } from './flights/flight-booking/flight-booking.component';
import { FlightSearchComponent } from './flights/flight-search/flight-search.component';
import { NextFlightsModule } from './next-flights/next-flights.module';

@Component({
  standalone: true,
  imports: [
    SidebarComponent,
    NavbarComponent,
    FlightSearchComponent,
    NextFlightsModule,
    FlightBookingComponent,
    RouterOutlet,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Hello World!';
}
