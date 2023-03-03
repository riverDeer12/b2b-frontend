import {Validators} from '@angular/forms';
import {FormControl, ValidatorFn} from '@angular/forms';

export const emailValidator: ValidatorFn = (control: FormControl) => {

  if (Validators.required(control) !== null) {
    return {
      required: true
    }
  }

  if (Validators.email(control) !== null) {
    return {
      email: true
    }
  }

  return null;
};
