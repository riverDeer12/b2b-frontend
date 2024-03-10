import { Component } from '@angular/core';
import {FormType} from "../../../../shared/enums/form-type";

@Component({
  selector: 'free-form-newsletter-additional-content-create',
  templateUrl: './free-form-newsletter-create.component.html',
  styleUrls: ['./free-form-newsletter-create.component.scss']
})
export class FreeFormNewsletterCreateComponent {
    returnUrl = '/admin/newsletters/free-form';

    formType = FormType.Create;
}
