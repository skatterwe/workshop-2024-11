import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from './flight-search.types';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  constructor(private httpClient: HttpClient) {}

  searchFlights(from: string, to?: string): Observable<Flight[]> {
    const url = 'https://demo.angulararchitects.io/api/flight';

    const headers = new HttpHeaders();
    headers.set('Accept', 'application/json');

    let params: any = { from };
    if (to) {
      params['to'] = to;
    }

    return this.httpClient.get<Flight[]>(url, { params, headers });
  }
}
