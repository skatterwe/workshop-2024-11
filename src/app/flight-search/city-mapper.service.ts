import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityMapperService {

  toCityString(value: string, format: 'SHORT' | 'LONG' = 'SHORT') {

    if(format === 'SHORT') {
      return this.formatCityShort(value)
    }


    if(value === 'Berlin') {
      return 'Berlin Brandenburg Willy Brandt'
    }

    if(value === 'Wien') {
      return 'Flughafen Wien Schwechat'
    }

    if(value === 'Hamburg') {
      return 'Airport Hamburg Fulsbüttel Helmut Schmidt'
    }

    return value;
  }

  private formatCityShort(value: string,): string {
    if(value === 'Berlin') {
      return 'BER'
    }

    if(value === 'Wien') {
      return 'VIE'
    }

    if(value === 'Hamburg') {
      return 'HAM'
    }

    return value;
  }
}
