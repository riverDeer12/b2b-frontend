import { Component } from '@angular/core';
import {FormType} from '../../../shared/enums/form-type';

@Component({
  selector: 'organization-create',
  templateUrl: './organization-create.component.html',
  styleUrls: ['./organization-create.component.scss']
})
export class OrganizationCreateComponent {
    returnUrl = '/admin/organizations';

    formType = FormType.Create;
}
