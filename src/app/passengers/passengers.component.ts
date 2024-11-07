import { Component } from '@angular/core';

@Component({
  selector: 'app-passengers',
  standalone: true,
  imports: [],
  templateUrl: './passengers.component.html',
  styleUrl: './passengers.component.css',
})
export class PassengersComponent {
  counter = 0;

  increaseCounter() {
    this.counter++;
  }

  decreaseCounter() {
    this.counter--;
  }
}
