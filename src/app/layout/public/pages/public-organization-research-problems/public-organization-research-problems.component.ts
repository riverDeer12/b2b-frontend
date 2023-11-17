import { Component } from '@angular/core';
import {ResearchProblem} from "../../../../research-problems/core/models/research-problem";
import {Category} from "../../../../categories/core/models/category";
import {EntityType} from "../../../../auth/core/enums/entity-type";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'public-organization-research-problems',
  templateUrl: './public-organization-research-problems.component.html',
  styleUrls: ['./public-organization-research-problems.component.scss']
})
export class PublicOrganizationResearchProblemsComponent {
    researchProblems!: ResearchProblem[];
    categories!: Category[];

    parentEntityType = EntityType.PublicOrganization;

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
