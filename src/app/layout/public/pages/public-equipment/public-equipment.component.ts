import {Component} from '@angular/core';
import {Category} from '../../../../categories/core/models/category';
import {EntityType} from '../../../../auth/core/enums/entity-type';
import {ActivatedRoute} from '@angular/router';
import {Equipment} from '../../../../equipment/core/models/equipment';

@Component({
    selector: 'public-equipment',
    templateUrl: './public-equipment.component.html',
    styleUrls: ['./public-equipment.component.scss']
})
export class PublicEquipmentComponent {
    equipment!: Equipment[];
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

            this.equipment = response['equipment'].map((x: Equipment) =>
                Object.assign(new Equipment(), x)
            );

            this.categories = response['categories'].map((x: Category) =>
                Object.assign(new Category(), x)
            );
        });
    }
}
