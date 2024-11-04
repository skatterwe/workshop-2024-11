import {Component, inject} from '@angular/core';
import {Flight} from "./flight-search.types";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-flight-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './flight-search.component.html',
  styleUrl: './flight-search.component.css',
})
export class FlightSearchComponent {
  flights: Flight[] = [];
  from = '';
  to = '';

  httpClient = inject(HttpClient);

  searchFlight() {
    const url = 'https://demo.angulararchitects.io/api/flight';

    const headers = new HttpHeaders();
    headers.set('Accept', 'application/json');

    this.httpClient.get<Flight[]>(url, {params: {from: this.from, to: this.to}, headers}).subscribe((flights) => {
      this.flights = flights;
      console.log(this.flights)
    });
  }
}
