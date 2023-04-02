import {Component} from '@angular/core';
import {FormType} from '../../../shared/enums/form-type';

@Component({
    selector: 'job-offer-create',
    templateUrl: './job-offer-create.component.html',
    styleUrls: ['./job-offer-create.component.scss']
})
export class JobOfferCreateComponent {
    returnUrl = '/admin/job-offer';

    formType = FormType.Create;
}
