import {Component} from '@angular/core';
import {EntityType} from '../../../../auth/core/enums/entity-type';
import {Category} from '../../../../categories/core/models/category';
import {ActivatedRoute} from '@angular/router';
import {ResearchProblem} from '../../../../research-problems/core/models/research-problem';

@Component({
    selector: 'public-company-research-problems',
    templateUrl: './public-company-research-problems.component.html',
    styleUrls: ['./public-company-research-problems.component.scss']
})
export class PublicCompanyResearchProblemsComponent {
    researchProblems!: ResearchProblem[];
    categories!: Category[];
    parentEntityType!: EntityType.Company;

    public get type(): typeof EntityType {
        return EntityType;
    }

    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.listenToResolver();
    }

    listenToResolver(): void {
        this.activatedRoute.data.subscribe((response) => {

            this.researchProblems = response['researchProblems'].map((x: any) =>
                Object.assign(new ResearchProblem(), x)
            );

            this.categories = response['categories'].map((x: Category) =>
                Object.assign(new Category(), x)
            );
        });
    }
}
