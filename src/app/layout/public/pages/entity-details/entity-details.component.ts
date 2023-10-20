import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Entity} from '../../../../shared/models/entity';
import {EntityType} from '../../../../auth/core/enums/entity-type';
import {Category} from '../../../../categories/core/models/category';
import {ResearchProblem} from '../../../../research-problems/core/models/research-problem';
import {Equipment} from '../../../../equipment/core/models/equipment';
import {SpecificKnowledge} from '../../../../specific-knowledge/core/models/specific-knowledge';

@Component({
    selector: 'entity-details',
    templateUrl: './entity-details.component.html',
    styleUrls: ['./entity-details.component.scss']
})
export class EntityDetailsComponent implements OnInit {
    currentEntityType!: EntityType;

    entityItem!: any;

    simpleEntity!: boolean;

    entityCategories!: Category[];

    researchProblems!: ResearchProblem[];

    equipmentList!: Equipment[];

    specificKnowledgeList!: SpecificKnowledge[];

    public get hasResearchProblems(): boolean {
        const validEntityType = this.currentEntityType === EntityType.Company ||
            this.currentEntityType === EntityType.Organization;

        if (!validEntityType) return false;

        return this.entityItem.researchProblems.length;
    }

    public get hasEquipment(): boolean {
        return this.currentEntityType == this.entityType.Scientist;
    }

    public get hasSpecificKnowledge(): boolean {
        return this.currentEntityType == this.entityType.Scientist;
    }

    public get entity(): typeof Entity {
        return Entity;
    }

    public get entityType(): typeof EntityType {
        return EntityType;
    }

    public get showContactButton(): boolean {
        return this.currentEntityType !== this.entityType.News;
    }

    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.listenToResolver();
    }

    listenToResolver() {
        this.activatedRoute.data.subscribe((response) => {

            this.currentEntityType = this.activatedRoute.snapshot.params['entityType'] as EntityType;

            this.entityItem = Entity.assignResponseToEntity(this.currentEntityType, response);

            this.initCategories();

            this.initSubEntities();
        });
    }

    private initCategories(): void {
        this.entityCategories = this.entityItem.categories.map((x: Category) =>
            Object.assign(new Category(), x)
        );
    }

    private initSubEntities(): void {
        if (this.hasResearchProblems) {
            this.initResearchProblems();
        }

        if (this.currentEntityType === EntityType.Scientist) {
            this.initEquipment();
            this.initSpecificKnowledge();
        }
    }

    private initResearchProblems() {
        this.researchProblems = this.entityItem.researchProblems.map((x: ResearchProblem) =>
            Object.assign(new ResearchProblem(), x)
        );
    }

    private initEquipment() {
        this.equipmentList = this.entityItem.equipment.map((x: Equipment) =>
            Object.assign(new Equipment(), x)
        );
    }

    private initSpecificKnowledge() {
        this.specificKnowledgeList = this.entityItem.specificKnowledge.map((x: SpecificKnowledge) =>
            Object.assign(new SpecificKnowledge(), x)
        );
    }
}
