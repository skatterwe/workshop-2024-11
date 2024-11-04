import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {FlightSearchComponent} from "./flight-search/flight-search.component";
import {NextFlightComponent} from "./next-flights/next-flight/next-flight.component";

@Component({
  standalone: true,
  imports: [SidebarComponent, NavbarComponent, FlightSearchComponent, NextFlightComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Hello World!';
}
