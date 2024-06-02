import {Component, Input} from '@angular/core';
import {EntityType} from '../../../../auth/core/enums/entity-type';
import {Category} from '../../../../categories/core/models/category';
import {Entity} from '../../../../shared/models/entity';
import {SharedService} from '../../../../shared/services/shared.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

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


    categoryEntities: Category[] = [];

    filterValue!: string;

    form!: FormGroup;

    filteredEntities!: any[];

    public get entity(): typeof Entity {
        return Entity;
    }

    public get type(): typeof EntityType {
        return EntityType;
    }

    constructor(private sharedService: SharedService, private fb: FormBuilder) {
        this.initFilterForm();
    }

    ngOnInit(): void {
        this.filteredEntities = this.entities;

        if (this.externalFilterInput) {
            this.subscribeToFilterDataChanges();
        }

        this.initCategoriesFilter();
    }

    /**
     * Initialize filter form
     * for categories.
     *
     * Comment: needed because of threw error. Will be
     * removed because it is not used in that way of
     * form group.
     *
     */
    private initFilterForm() {
        this.form = this.fb.group({
            filterCategories: new FormControl('')
        })
    }

    /**
     * Method that handles
     * external filter event.
     */
    private subscribeToFilterDataChanges(): void {
        this.sharedService.getExternalFilterValue().subscribe((response: string) => {
            this.filterEntities(response as string);
        })
    }

    /**
     * Initialize filter
     * that is triggered by
     * selected categories.
     */
    private initCategoriesFilter(): void {
        this.sharedService.getSelectedCategories().subscribe((response: string[]) => {
            if (!response.length) {
                this.categoryEntities = [];
                this.filterEntities(this.filterValue);
            } else {

                this.entities.forEach((entity: any) => {
                    entity.categories.map((category: Category) => {
                        if (response.includes(category.id)) {
                            this.categoryEntities.push(entity);
                        }
                    });
                })

                if (this.categoryEntities) {
                    this.filteredEntities = this.categoryEntities;
                    this.filterEntities(this.filterValue);
                }
            }
        })
    }

    /**
     * Helper method that
     * handles filtering action.
     *
     * @param value filter value
     */
    private filterEntities(value: string) {
        this.filterValue = value as string;

        if (!this.filterValue) {
            this.filteredEntities = this.entities;

            if (this.categoryEntities.length) {
                this.filteredEntities = this.categoryEntities;
                return;
            } else {
                this.filteredEntities = this.entities
                return;
            }
        }

        if (this.filterValue.length < 3) {

            if (this.filterValue.length == 0) {
                this.filteredEntities = this.entities;
            }

            return;
        }

        this.filteredEntities = this.entities
            .filter(x => x[this.filterField].toLocaleLowerCase().includes(this.filterValue));
    }

    /**
     * Method for handling
     * global filter across data.
     */
    onFilter(eventTarget: any) {
        this.filterEntities(eventTarget.value);
    }

    entityHasCategories(): boolean {
        switch (this.entityType) {
            case EntityType.FinancingSource:
                return false;
            default:
                return true;
        }
    }
}
