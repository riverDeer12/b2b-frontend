import {Component} from '@angular/core';
import {FormType} from "../../../shared/enums/form-type";

@Component({
    selector: 'newsletter-additional-content-create',
    templateUrl: './newsletter-additional-content-create.component.html',
    styleUrls: ['./newsletter-additional-content-create.component.scss']
})
export class NewsletterAdditionalContentCreateComponent {
    returnUrl = '/admin/newsletters';

    formType = FormType.Create;
}
