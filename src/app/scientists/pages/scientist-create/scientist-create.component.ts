import {Component} from '@angular/core';
import {FormType} from '../../../shared/enums/form-type';

@Component({
    selector: 'scientist-create',
    templateUrl: './scientist-create.component.html',
    styleUrls: ['./scientist-create.component.scss']
})
export class ScientistCreateComponent {
    returnUrl = '/admin/scientist';

    formType = FormType.Create;
}
