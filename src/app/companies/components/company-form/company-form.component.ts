import {Component, Input} from '@angular/core';
import {ResearchProblem} from '../../../research-problems/core/models/research-problem';
import {Company} from '../../core/models/company';
import {FormType} from '../../../shared/enums/form-type';
import {EntityType} from '../../../auth/core/enums/entity-type';
import {Category} from '../../../categories/core/models/category';
import {JobOffer} from '../../../job-offers/core/models/job-offer';

@Component({
    selector: 'company-form',
    templateUrl: './company-form.component.html',
    styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent {
    @Input() formType!: FormType;
    @Input() company!: Company;
    @Input() researchProblems!: ResearchProblem[];
    @Input() jobOffers!: JobOffer[];
    @Input() returnUrl!: string;
    @Input() categories!: Category[];

    entityType = EntityType.Company;

    ngOnInit() {

    }
}
