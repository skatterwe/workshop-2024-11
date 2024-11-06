import { inject, Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable()
export class FlightBookingComponentDataService {
  fb = inject(FormBuilder);

  formGroup = this.fb.nonNullable.group({
    generalInfo: this.fb.nonNullable.group({
      flightNo: ['', [Validators.required, Validators.minLength(5)]],
    }),
    passengerInfo: this.fb.nonNullable.group({
      name: ['', Validators.required],
      firstName: ['', Validators.required],
      birthdate: '',
    }),
  });

  get generalInfoForm() {
    return this.formGroup.controls.generalInfo;
  }

  get passengerInfoForm() {
    return this.formGroup.controls.passengerInfo;
  }
}
