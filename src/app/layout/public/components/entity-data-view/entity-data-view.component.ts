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

    filteredValue!: string;

    form!: FormGroup;

    filteredEntities!: any[];

    public get entity(): typeof Entity {
        return Entity;
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

    private initFilterForm() {
        this.form = this.fb.group({
            filterCategories: new FormControl('')
        })
    }

    /**
     * Method that handles
     * external filter event.
     */
    subscribeToFilterDataChanges(): void {
        this.sharedService.getExternalFilterValue().subscribe((response: string) => {
            this.filterEntities(response as string);
        })
    }


    /**
     * Method for handling
     * global filter across data.
     */
    onFilter(eventTarget: any) {
        this.filterEntities(eventTarget.value);
    }

    /**
     * Initialize filter
     * that is triggered by
     * selected categories.
     */
    initCategoriesFilter(): void {
        this.sharedService.getSelectedCategories().subscribe((response: string[]) => {
            if (!response.length) {
                this.filterEntities(this.filteredValue);
            } else {

                let categoryEntities: any = [];

                this.entities.forEach((entity: any) => {
                    entity.categories.map((category: Category) => {
                        if (response.includes(category.id)) {
                            categoryEntities.push(entity);
                        }
                    });
                })

                if (categoryEntities) {
                    this.filteredEntities = categoryEntities;
                }
            }
        })
    }

    private filterEntities(enteredValue: string) {
        this.filteredValue = enteredValue as string;

        if (!this.filteredValue) {
            this.filteredEntities = this.entities;
            return;
        }

        if (this.filteredValue.length < 3) {

            if (this.filteredValue.length == 0) {
                this.filteredEntities = this.entities;
            }

            return;
        }

        this.filteredEntities = this.entities
            .filter(x => x[this.filterField].toLocaleLowerCase().includes(this.filteredValue));
    }
}
