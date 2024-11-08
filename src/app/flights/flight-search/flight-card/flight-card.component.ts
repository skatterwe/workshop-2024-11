import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { injectCdBlink } from '../../../shared/blink';
import { Flight } from '../flight-search.types';

@Component({
  selector: 'app-flight-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flight-card.component.html',
  styleUrl: './flight-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlightCardComponent {
  blink = injectCdBlink();
  @Input({ required: true }) flight!: Flight;
  @Input() selected = false;

  @Output() selectionChange: EventEmitter<boolean> = new EventEmitter();

  router = inject(Router);
  route = inject(ActivatedRoute);

  // @Output() deselectFlight: EventEmitter<number> = new EventEmitter();
  // @Output() selectFlight: EventEmitter<number> = new EventEmitter();

  selectFlight() {
    this.selectionChange.emit(true);
  }

  deselectFlight() {
    this.selectionChange.emit(false);
  }

  bookFlight() {
    this.router.navigate([this.flight.id], { relativeTo: this.route });
    // this.router.navigate(['flights', 'flight-search', this.flight.id]);
  }
}
