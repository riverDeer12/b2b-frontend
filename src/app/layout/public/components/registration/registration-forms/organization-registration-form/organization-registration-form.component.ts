import {Component, Input} from '@angular/core';
import {Category} from '../../../../../../categories/core/models/category';

@Component({
  selector: 'organization-registration-form',
  templateUrl: './organization-registration-form.component.html',
  styleUrls: ['./organization-registration-form.component.scss']
})
export class OrganizationRegistrationFormComponent {
    @Input() categories!: Category[];
}
