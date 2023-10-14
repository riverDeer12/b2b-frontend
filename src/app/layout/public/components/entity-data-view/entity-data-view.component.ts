import {Component, Input} from '@angular/core';
import {EntityType} from '../../../../auth/core/enums/entity-type';
import {Category} from '../../../../categories/core/models/category';
import {Entity} from '../../../../shared/models/entity';

@Component({
    selector: 'entity-data-view',
    templateUrl: './entity-data-view.component.html',
    styleUrls: ['./entity-data-view.component.scss']
})
export class EntityDataViewComponent {
    @Input() entityType!: EntityType;
    @Input() entities!: any[];
    @Input() filterField!: string;
    @Input() categories!: Category[];

    filteredEntities!: any[];

    public get entity(): typeof Entity {
        return Entity;
    }

    constructor() {
    }

    ngOnInit(): void {
       this.filteredEntities = this.entities;
    }

    /**
     * Method for handling
     * global filter across data.
     */
    onFilter(eventTarget: any) {

        const filteredValue = eventTarget.value;

        if (filteredValue.length < 3) {

            if (filteredValue.length == 0) {
                this.filteredEntities = this.entities;
            }

            return;
        }

        this.filteredEntities = this.entities
            .filter(x => x[this.filterField].toLocaleLowerCase().includes(filteredValue));
    }
}
