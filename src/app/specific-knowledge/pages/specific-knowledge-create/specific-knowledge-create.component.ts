import {Component} from '@angular/core';
import {FormType} from '../../../shared/enums/form-type';

@Component({
    selector: 'specific-knowledge-create',
    templateUrl: './specific-knowledge-create.component.html',
    styleUrls: ['./specific-knowledge-create.component.scss']
})
export class SpecificKnowledgeCreateComponent {
    returnUrl = '/admin/specific-knowledge';

    formType = FormType.Create;
}
