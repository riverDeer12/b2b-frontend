import {Component} from '@angular/core';
import {FormType} from "../../../shared/enums/form-type";

@Component({
    selector: 'research-problem-create',
    templateUrl: './research-problem-create.component.html',
    styleUrls: ['./research-problem-create.component.scss']
})
export class ResearchProblemCreateComponent {
    returnUrl = '/admin/research-problems';
    formType = FormType.Create;
}
