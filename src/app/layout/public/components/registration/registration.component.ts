import {Component} from '@angular/core';
import {EntityType} from '../../../../auth/core/enums/entity-type';
import {FormType} from '../../../../shared/enums/form-type';
import {Category} from '../../../../categories/core/models/category';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
    categories!: Category[];
    selectedEntityType!: EntityType;

    public get entityType(): typeof EntityType {
        return EntityType;
    }

    public get formType(): typeof FormType {
        return FormType;
    }

    constructor(private activatedRoute: ActivatedRoute) {
        this.listenToResolver();
    }

    private listenToResolver() {
        this.activatedRoute.data.subscribe((response) => {
            this.categories = response['categories'].map((x: Category) =>
                Object.assign(new Category(), x)
            );
        });
    }
}
