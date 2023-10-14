import {Component, Input} from '@angular/core';
import {News} from "../../../../news/core/models/news";
import {ResearchProblem} from "../../../../research-problems/core/models/research-problem";
import {Company} from "../../../../companies/core/models/company";
import {Scientist} from "../../../../scientists/core/models/scientist";
import {Organization} from "../../../../organizations/core/models/organization";
import {Equipment} from "../../../../equipment/core/models/equipment";
import {EntityType} from "../../../../auth/core/enums/entity-type";
import {Entity} from "../../../../shared/models/entity";

@Component({
  selector: 'latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss']
})
export class LatestComponent {
    @Input() latestNews!: News[];
    @Input() latestCompanyResearchProblems!: ResearchProblem[];
    @Input() latestOrganizationResearchProblems!: ResearchProblem[];
    @Input() latestCompanies!: Company[];
    @Input() latestScientists!: Scientist[];
    @Input() latestOrganizations!: Organization[];
    @Input() latestEquipment!: Equipment[];

    public get type(): typeof EntityType{
        return EntityType;
    }

    public get entity(): typeof Entity{
        return Entity;
    }
}
