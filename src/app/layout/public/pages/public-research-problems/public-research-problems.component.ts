import {Component} from '@angular/core';
import {EntityType} from '../../../../auth/core/enums/entity-type';
import {Category} from '../../../../categories/core/models/category';
import {ActivatedRoute} from '@angular/router';
import {ResearchProblem} from '../../../../research-problems/core/models/research-problem';
import {SharedService} from '../../../../shared/services/shared.service';

@Component({
    selector: 'public-research-problems',
    templateUrl: './public-research-problems.component.html',
    styleUrls: ['./public-research-problems.component.scss']
})
export class PublicResearchProblemsComponent {
    researchProblems!: ResearchProblem[];
    categories!: Category[];
    parentEntityType!: EntityType;

    public get type(): typeof EntityType {
        return EntityType;
    }

    constructor(private activatedRoute: ActivatedRoute,
                private sharedService: SharedService) {
    }

    ngOnInit() {
        this.parentEntityType = this.activatedRoute.snapshot.params['entityType'] as EntityType;
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
