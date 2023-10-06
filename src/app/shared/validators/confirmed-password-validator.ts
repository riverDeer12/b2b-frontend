import {AbstractControl, ValidationErrors} from '@angular/forms';

export const confirmedPasswordValidator = (passwordControl: AbstractControl, confirmPasswordControl: AbstractControl):
    ValidationErrors | null => {

    const password = passwordControl.value;

    const confirmedPassword = confirmPasswordControl.value;

    if(!confirmedPassword){
        return {
            required: true
        }
    }

    if (password !== confirmedPassword) {
        return {
            mismatch: true
        }
    }

    return null
}

