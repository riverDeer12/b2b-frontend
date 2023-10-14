import {Component} from '@angular/core';
import {EntityType} from '../../../../auth/core/enums/entity-type';
import {Organization} from '../../../../organizations/core/models/organization';
import {Category} from '../../../../categories/core/models/category';
import {ActivatedRoute} from '@angular/router';
import {Company} from '../../../../companies/core/models/company';
import {Scientist} from '../../../../scientists/core/models/scientist';
import {SharedService} from '../../../../shared/services/shared.service';

@Component({
    selector: 'main-search',
    templateUrl: './main-search.component.html',
    styleUrls: ['./main-search.component.scss']
})
export class MainSearchComponent {

    companies!: Company[];
    scientists!: Scientist[];
    organizations!: Organization[];
    categories!: Category[];

    filterValue!: string;

    public get entityType(): typeof EntityType {
        return EntityType;
    }

    constructor(private activatedRoute: ActivatedRoute,
                private sharedService: SharedService) {
    }

    ngOnInit() {
        this.listenToResolver();
    }

    listenToResolver(): void {
        this.activatedRoute.data.subscribe((response) => {

            this.companies = response['companies'].map((x: any) =>
                Object.assign(new Company(), x)
            );

            this.scientists = response['scientists'].map((x: any) =>
                Object.assign(new Scientist(), x)
            );

            this.organizations = response['organizations'].map((x: any) =>
                Object.assign(new Organization(), x)
            );

            this.categories = response['categories'].map((x: Category) =>
                Object.assign(new Category(), x)
            );
        });
    }


    onFilter(eventTarget: any): void {
        this.sharedService.setExternalFilterValue(eventTarget.value);
    }
}
