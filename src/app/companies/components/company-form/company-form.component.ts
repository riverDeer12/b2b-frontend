import {Component, Input} from '@angular/core';
import {ResearchProblem} from "../../../research-problems/core/models/research-problem";
import {Company} from "../../core/models/company";
import {FormType} from "../../../shared/enums/form-type";
import {EntityType} from "../../../auth/core/enums/entity-type";

@Component({
    selector: 'company-form',
    templateUrl: './company-form.component.html',
    styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent {
    @Input() formType!: FormType;
    @Input() company!: Company;
    @Input() researchProblems!: ResearchProblem[];
    @Input() returnUrl!: string;

    entityType!: EntityType.Company;

    ngOnInit(){

    }
}
