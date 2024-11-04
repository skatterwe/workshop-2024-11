import { Component } from '@angular/core';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NextFlightsModule } from './next-flights/next-flights.module';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  standalone: true,
  imports: [SidebarComponent, NavbarComponent, FlightSearchComponent, NextFlightsModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Hello World!';
}
