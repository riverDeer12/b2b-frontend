import {Component} from '@angular/core';
import {FormType} from "../../../shared/enums/form-type";

@Component({
    selector: 'newsletter-create',
    templateUrl: './newsletter-create.component.html',
    styleUrls: ['./newsletter-create.component.scss']
})
export class NewsletterCreateComponent {
    returnUrl = '/admin/newsletter';

    formType = FormType.Create;
}
