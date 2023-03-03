import {
  FormControl,
  ValidatorFn,
  Validators,
} from '@angular/forms';

export const taxCodeValidator: ValidatorFn = (control: FormControl) => {

  if (Validators.required(control) !== null){
    return {
      required: true
    };
  }

  if (!control.value || control.value.length !== 11) {
    return {
      oib: true,
    };
  }

  const b = parseInt(control.value, 10);

  if (isNaN(b)) {
    return {
        oib: true,
      };
  }

  let a = 10;

  for (let i = 0; i < 10; i++) {
    a = a + parseInt(control.value.substr(i, 1), 10);
    a = a % 10;
    if (a === 0) {
      a = 10;
    }
    a *= 2;
    a = a % 11;
  }

  let kontrolni = 11 - a;
  if (kontrolni === 10) {
    kontrolni = 0;
  }

  const parsedValue = parseInt(control.value.substr(10, 1), 10);

  const isValid = kontrolni === parsedValue;

  return !isValid
    ? {
        oib: true,
      }
    : null;
};
