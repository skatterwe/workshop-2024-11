import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Flight } from '../flight-search.types';

@Component({
  selector: 'app-flight-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flight-card.component.html',
  styleUrl: './flight-card.component.css',
})
export class FlightCardComponent {
  @Input({ required: true }) flight!: Flight;
  @Input() selected = false;

  @Output() selectionChange: EventEmitter<boolean> = new EventEmitter();

  // @Output() deselectFlight: EventEmitter<number> = new EventEmitter();
  // @Output() selectFlight: EventEmitter<number> = new EventEmitter();

  selectFlight() {
    this.selectionChange.emit(true);
  }

  deselectFlight() {
    this.selectionChange.emit(false);
  }
}
