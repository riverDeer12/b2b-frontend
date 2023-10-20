import { Component } from '@angular/core';
import {Category} from '../../../../categories/core/models/category';
import {EntityType} from '../../../../auth/core/enums/entity-type';
import {ActivatedRoute} from '@angular/router';
import {SpecificKnowledge} from '../../../../specific-knowledge/core/models/specific-knowledge';

@Component({
  selector: 'public-specific-knowledge',
  templateUrl: './public-specific-knowledge.component.html',
  styleUrls: ['./public-specific-knowledge.component.scss']
})
export class PublicSpecificKnowledgeComponent {
    specificKnowledge!: SpecificKnowledge[];
    categories!: Category[];
    parentEntityType: EntityType = EntityType.Scientist;

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

            this.specificKnowledge = response['specificKnowledge'].map((x: SpecificKnowledge) =>
                Object.assign(new SpecificKnowledge(), x)
            );

            this.categories = response['categories'].map((x: Category) =>
                Object.assign(new Category(), x)
            );
        });
    }
}
