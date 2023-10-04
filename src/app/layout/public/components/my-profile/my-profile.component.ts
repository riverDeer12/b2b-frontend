import {Component} from '@angular/core';
import {Category} from "../../../../categories/core/models/category";
import {ResearchProblem} from "../../../../research-problems/core/models/research-problem";
import {EntityType} from "../../../../auth/core/enums/entity-type";
import {FormType} from "../../../../shared/enums/form-type";
import {JobOffer} from "../../../../job-offers/core/models/job-offer";
import {Equipment} from "../../../../equipment/core/models/equipment";
import {SpecificKnowledge} from "../../../../specific-knowledge/core/models/specific-knowledge";
import {Scientist} from '../../../../scientists/core/models/scientist';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'my-profile',
    templateUrl: './my-profile.component.html',
    styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent {
    profileEntityType!: EntityType;
    entity!: any;
    categories!: Category[];
    researchProblems!: ResearchProblem[];
    jobOffers!: JobOffer[];
    equipment!: Equipment[];
    specificKnowledge!: SpecificKnowledge[];

    returnUrl="/my-profile";

    public get formType(): typeof FormType {
        return FormType;
    }

    public get entityType(): typeof EntityType {
        return EntityType;
    }

    constructor(private activatedRoute: ActivatedRoute) {
        this.listenToResolver();
    }

    private listenToResolver(): void {
        this.activatedRoute.data.subscribe((response) => {

            this.entity = response['entity'].map((x: Scientist) =>
                Object.assign(new Scientist(), x)
            );
        });
    }

}
