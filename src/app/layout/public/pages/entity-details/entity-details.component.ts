import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Entity} from '../../../../shared/models/entity';
import {EntityType} from '../../../../auth/core/enums/entity-type';
import {Category} from '../../../../categories/core/models/category';
import {ResearchProblem} from '../../../../research-problems/core/models/research-problem';

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

    public get hasResearchProblems(): boolean {
        return this.currentEntityType === EntityType.Company ||
            this.currentEntityType === EntityType.Scientist;
    }

    public get entity(): typeof Entity {
        return Entity;
    }

    public get entityType(): typeof EntityType {
        return EntityType;
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

    private initSubEntities(): void {
        if (this.hasResearchProblems)
            this.initResearchProblems();
    }

    initResearchProblems() {
        this.researchProblems = this.entityItem.researchProblems.map((x: ResearchProblem) =>
            Object.assign(new ResearchProblem(), x)
        );
    }

    private initCategories(): void {
        this.entityCategories = this.entityItem.categories.map((x: Category) =>
            Object.assign(new Category(), x)
        );
    }
}
