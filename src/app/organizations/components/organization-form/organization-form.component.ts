import {Component, Input} from '@angular/core';
import {Organization} from '../../core/models/organization';
import {EntityType} from '../../../auth/core/enums/entity-type';
import {FormType} from "../../../shared/enums/form-type";
import {ResearchProblem} from "../../../research-problems/core/models/research-problem";
import {Category} from '../../../categories/core/models/category';
import {RedirectType} from "../../../shared/enums/redirect-type";
import {Equipment} from "../../../equipment/core/models/equipment";
import {ResearchProblemService} from "../../../research-problems/core/services/research-problem.service";

@Component({
    selector: 'organization-form',
    templateUrl: './organization-form.component.html',
    styleUrls: ['./organization-form.component.scss']
})
export class OrganizationFormComponent {
    @Input() organization!: Organization;
    @Input() researchProblems!: ResearchProblem[];
    @Input() categories!: Category[];
    @Input() returnUrl!: string;
    @Input() formType!: FormType;

    entityType = EntityType.PublicOrganization;

    public get redirectType(): typeof RedirectType{
        return RedirectType;
    }

    constructor() {}


    ngOnInit(){
        this.researchProblems = this.researchProblems.map((x: ResearchProblem) =>
            Object.assign(new ResearchProblem(), x)
        );
    }
}
