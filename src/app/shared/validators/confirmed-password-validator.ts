import {FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';

export const confirmedPasswordValidator: ValidatorFn = (formGroup: FormGroup, confirmedPassword: FormControl) => {
    if (Validators.required(confirmedPassword) !== null) {
        return {
            required: true,
        };
    }

    const passwordValue = formGroup.get('password')?.value;

    const confirmedPasswordValue = formGroup.get('confirmedPassword')?.value;

    if (passwordValue !== confirmedPasswordValue) {
        return {
            mismatch: true
        };
    }

    return null;
};

