import {Component} from '@angular/core';
import {FormType} from '../../../shared/enums/form-type';
import {ActivatedRoute} from '@angular/router';
import {Company} from '../../core/models/company';
import {ResearchProblem} from "../../../research-problems/core/models/research-problem";
import {Category} from '../../../categories/core/models/category';

@Component({
    selector: 'company-edit',
    templateUrl: './company-edit.component.html',
    styleUrls: ['./company-edit.component.scss']
})
export class CompanyEditComponent {
    returnUrl = '/admin/companies';

    formType = FormType.Edit;

    company!: Company;

    researchProblems!: ResearchProblem[];

    categories!: Category[];

    constructor(private activatedRoute: ActivatedRoute) {
        this.listenToResolver();
    }

    ngOnInit(): void {
    }

    private listenToResolver() {
        this.activatedRoute.data.subscribe((response) => {
            this.company = Object.assign(new Company(), response['company']);
            this.researchProblems = response["researchProblems"].map((x: ResearchProblem) =>
                Object.assign(new ResearchProblem(), x)
            );
            this.categories = response["categories"].map((x: Category) =>
                Object.assign(new Category(), x)
            );
        });
    }
}
