import {Component, Input} from '@angular/core';
import {Category} from '../../../../../../categories/core/models/category';

@Component({
    selector: 'company-registration-form',
    templateUrl: './company-registration-form.component.html',
    styleUrls: ['./company-registration-form.component.scss']
})
export class CompanyRegistrationFormComponent {
    @Input() categories!: Category[];
}
