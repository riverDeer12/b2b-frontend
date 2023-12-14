import { Component } from '@angular/core';
import {Equipment} from '../../../../equipment/core/models/equipment';
import {Category} from '../../../../categories/core/models/category';
import {EntityType} from '../../../../auth/core/enums/entity-type';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../../../products/core/models/product';

@Component({
  selector: 'public-products',
  templateUrl: './public-products.component.html',
  styleUrls: ['./public-products.component.scss']
})
export class PublicProductsComponent {
    products!: Product[];
    categories!: Category[];
    parentEntityType: EntityType = EntityType.Company;

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

            this.products = response['products'].map((x: Product) =>
                Object.assign(new Product(), x)
            );

            this.categories = response['categories'].map((x: Category) =>
                Object.assign(new Category(), x)
            );
        });
    }
}
