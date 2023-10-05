import {AbstractControl, ValidationErrors} from '@angular/forms';

export const confirmedPasswordValidator = (passwordControl: AbstractControl, confirmPasswordControl: AbstractControl):
    ValidationErrors | null => {

    if(!confirmPasswordControl.value){
        return {
            required: true
        }
    }

    if (passwordControl.value !== confirmPasswordControl.value) {
        return {
            mismatch: true
        }
    }

    return null
}

