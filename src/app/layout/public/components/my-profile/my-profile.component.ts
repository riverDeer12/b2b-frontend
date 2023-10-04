import {Component} from '@angular/core';
import {Category} from "../../../../categories/core/models/category";
import {ResearchProblem} from "../../../../research-problems/core/models/research-problem";
import {EntityType} from "../../../../auth/core/enums/entity-type";
import {FormType} from "../../../../shared/enums/form-type";
import {JobOffer} from "../../../../job-offers/core/models/job-offer";
import {Equipment} from "../../../../equipment/core/models/equipment";
import {SpecificKnowledge} from "../../../../specific-knowledge/core/models/specific-knowledge";

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

    constructor() {
    }


}
