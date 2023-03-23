import {Component} from '@angular/core';
import {FormType} from '../../../shared/enums/form-type';

@Component({
    selector: 'company-create',
    templateUrl: './company-create.component.html',
    styleUrls: ['./company-create.component.scss']
})
export class CompanyCreateComponent {

    formType = FormType.Create;

    returnUrl = '/admin/companies';

    constructor() {
    }
}
