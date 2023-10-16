import {Component} from '@angular/core';
import {EntityType} from '../../../../auth/core/enums/entity-type';
import {Category} from '../../../../categories/core/models/category';
import {ActivatedRoute} from '@angular/router';
import {Scientist} from '../../../../scientists/core/models/scientist';

@Component({
    selector: 'public-scientists',
    templateUrl: './public-scientists.component.html',
    styleUrls: ['./public-scientists.component.scss']
})
export class PublicScientistsComponent {
    scientists!: Scientist[];
    categories!: Category[];

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

            this.scientists = response['entities'].map((x: any) =>
                Object.assign(new Scientist(), x)
            );
            this.categories = response['categories'].map((x: Category) =>
                Object.assign(new Category(), x)
            );
        });
    }
}
