import {Injectable} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class ValidationService {

    invalidClass = 'ng-invalid ng-dirty';

    constructor() {
    }

    /**
     * Method for checking
     * parent form field errors.
     *
     * @param parentForm name of form group that contains validations.
     * @param fieldName name of form control that needs to be validated.
     * @param errorName name of validation check (required, minLength etc.)
     * @param formGroupName optional form group if you are working with inherited forms.
     */
    hasErrors(parentForm: FormGroup, fieldName: string, errorName: string, formGroupName?: string): string {
        if (parentForm && formGroupName === undefined) {

            const hasErrors = parentForm.get(fieldName)!.touched && parentForm.get(fieldName)!.hasError(errorName);

            return hasErrors ? this.invalidClass : '';
        }

        const form = parentForm.get(formGroupName as string) as FormGroup;

        const hasErrors =  form.get(fieldName)!.touched && form.get(fieldName)!.hasError(errorName);

        return hasErrors ? this.invalidClass : '';
    }
}
