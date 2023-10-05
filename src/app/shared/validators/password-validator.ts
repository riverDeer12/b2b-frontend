import {FormControl, ValidatorFn, Validators} from '@angular/forms';

export const passwordValidator: ValidatorFn = (password: FormControl) => {
    if (Validators.required(password) !== null) {
        return {
            required: true,
        };
    }

    if (password.value.length < 8) {
        return {
            minLength: true,
        };
    }

    return null;
};
