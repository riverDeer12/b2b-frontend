import {AbstractControl, FormControl, ValidatorFn, Validators} from '@angular/forms';

export const passwordValidator: ValidatorFn = (control: AbstractControl) => {
    if (Validators.required(control.value) === null) {
        return {
            required: true,
        };
    }

    if (control.value.length < 8) {
        return {
            minLength: true,
        };
    }

    return null;
};
