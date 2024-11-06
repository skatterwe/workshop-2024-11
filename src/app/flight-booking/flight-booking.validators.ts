import { AbstractControl, ValidatorFn } from '@angular/forms';

export const validateFlightNo: ValidatorFn = (control: AbstractControl) => {
  if (isNaN(control.value)) {
    return {
      flightNo: 'Not a valid number',
    };
  }

  return null;
};
