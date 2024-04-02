import {Component} from '@angular/core';
import {EntityType} from '../../../../auth/core/enums/entity-type';
import {ActivatedRoute} from '@angular/router';
import {Company} from '../../../../companies/core/models/company';
import {Category} from '../../../../categories/core/models/category';

@Component({
    selector: 'public-companies',
    templateUrl: './public-companies.component.html',
    styleUrls: ['./public-companies.component.scss']
})
export class PublicCompaniesComponent {
    companies!: Company[];
    categories!: Category[];

    public get type(): typeof EntityType{
        return EntityType;
    }

    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.listenToResolver();
    }

    listenToResolver(): void {
        this.activatedRoute.data.subscribe((response) => {

            this.companies = response['entities'].map((x: any) =>
                Object.assign(new Company(), x)
            );

            this.categories = response['categories'].map((x: Category) =>
                Object.assign(new Category(), x)
            );
        });
    }
}
