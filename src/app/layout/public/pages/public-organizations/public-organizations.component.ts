import { Component } from '@angular/core';
import {EntityType} from '../../../../auth/core/enums/entity-type';
import {Category} from '../../../../categories/core/models/category';
import {ActivatedRoute} from '@angular/router';
import {Organization} from '../../../../organizations/core/models/organization';

@Component({
  selector: 'public-organizations',
  templateUrl: './public-organizations.component.html',
  styleUrls: ['./public-organizations.component.scss']
})
export class PublicOrganizationsComponent {
    entityType = EntityType.Organization;
    organizations!: Organization[];
    categories!: Category[];

    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.listenToResolver();
    }

    listenToResolver(): void {
        this.activatedRoute.data.subscribe((response) => {

            this.organizations = response['entities'].map((x: any) =>
                Object.assign(new Organization(), x)
            );
            this.categories = response['categories'].map((x: Category) =>
                Object.assign(new Category(), x)
            );
        });
    }
}
