import { Pipe, PipeTransform } from '@angular/core';
import {CityMapperService} from "./city-mapper.service";
import {toCityName} from "./city.transformer";

@Pipe({
  name: 'city',
  standalone: true
})
export class CityPipe implements PipeTransform {

  constructor(private mapper: CityMapperService) { }

  transform(value: string, format: 'SHORT' | 'LONG' = 'SHORT'): string {

    // return this.mapper.toCityString(value, format); // Option 1 - for reusability in services
    // return toCityName(value, format); // Option 2 - for reusability in services

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


