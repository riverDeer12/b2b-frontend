import {Component, Input} from '@angular/core';
import {EntityType} from '../../../../auth/core/enums/entity-type';
import {Category} from '../../../../categories/core/models/category';
import {Entity} from '../../../../shared/models/entity';
import {SharedService} from '../../../../shared/services/shared.service';

@Component({
    selector: 'entity-data-view',
    templateUrl: './entity-data-view.component.html',
    styleUrls: ['./entity-data-view.component.scss']
})
export class EntityDataViewComponent {
    @Input() entityType!: EntityType;
    @Input() parentEntityType!: EntityType
    @Input() entities!: any[];
    @Input() categories!: Category[];
    @Input() externalFilterInput!: boolean;
    @Input() filterField: string = 'name';
    @Input() showFilterInput: boolean = true;


    filteredEntities!: any[];

    public get entity(): typeof Entity {
        return Entity;
    }

    constructor(private sharedService: SharedService) {
    }

    ngOnInit(): void {
        this.filteredEntities = this.entities;

        if (this.externalFilterInput) {
            this.subscribeToDataChanges();
        }
    }

    /**
     * Method that handles
     * external filter event.
     */
    subscribeToDataChanges(): void {
        this.sharedService.getExternalFilterValue().subscribe((response: string) => {

            let filteredValue = response as string;

            if (filteredValue.length < 3) {

                if (filteredValue.length == 0) {
                    this.filteredEntities = this.entities;
                }

                return;
            }

            this.filteredEntities = this.entities
                .filter(x => x[this.filterField].toLocaleLowerCase().includes(filteredValue));
        })
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
