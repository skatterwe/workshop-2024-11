import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NextFlightComponent} from "./next-flight/next-flight.component";



@NgModule({
  imports: [CommonModule],
  declarations: [NextFlightComponent],
  exports: [NextFlightComponent],
})
export class NextFlightsModule {}
