import {Component} from '@angular/core';
import {FormType} from '../../../shared/enums/form-type';
import {TranslateService} from '@ngx-translate/core';
import {ActivatedRoute} from '@angular/router';
import {Organization} from '../../core/models/organization';
import {ResearchProblem} from "../../../research-problems/core/models/research-problem";
import {Category} from '../../../categories/core/models/category';

@Component({
    selector: 'organization-edit',
    templateUrl: './organization-edit.component.html',
    styleUrls: ['./organization-edit.component.scss']
})
export class OrganizationEditComponent {
    returnUrl = '/admin/organizations';

    formType = FormType.Edit;

    organization!: Organization;

    researchProblems!: ResearchProblem[];

    categories!: Category[];

    constructor(private translateService: TranslateService, private activatedRoute: ActivatedRoute) {
        this.listenToResolver();
    }

    ngOnInit(): void {
    }

    private listenToResolver() {
        this.activatedRoute.data.subscribe((response) => {
            this.organization = Object.assign(new Organization(), response['organization']);
            this.categories = response["categories"].map((x: Category) =>
                Object.assign(new Category(), x)
            );
            this.researchProblems = response["researchProblems"].map((x: ResearchProblem) =>
                Object.assign(new ResearchProblem(), x)
            );
        });
    }
}
