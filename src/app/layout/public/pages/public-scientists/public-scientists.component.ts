import { Component } from '@angular/core';
import {EntityType} from '../../../../auth/core/enums/entity-type';
import {Organization} from '../../../../organizations/core/models/organization';
import {Category} from '../../../../categories/core/models/category';
import {ActivatedRoute} from '@angular/router';
import {Scientist} from '../../../../scientists/core/models/scientist';

@Component({
  selector: 'public-scientists',
  templateUrl: './public-scientists.component.html',
  styleUrls: ['./public-scientists.component.scss']
})
export class PublicScientistsComponent {
    entityType = EntityType.Scientist;
    scientists!: Organization[];
    categories!: Category[];

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
