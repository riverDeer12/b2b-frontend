import {Component, Input} from '@angular/core';
import {Company} from '../../../../companies/core/models/company';
import {ActivatedRoute} from '@angular/router';
import {News} from '../../../../news/core/models/news';
import {EntityType} from '../../../../auth/core/enums/entity-type';

@Component({
    selector: 'entity-data-view',
    templateUrl: './entity-data-view.component.html',
    styleUrls: ['./entity-data-view.component.scss']
})
export class EntityDataViewComponent {
    companies!: Company[]

    filteredCompanies!: Company[];

    entityType = EntityType.Company;

    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.listenToResolver();
    }

    private listenToResolver() {
        this.activatedRoute.data.subscribe((response) => {
            this.companies = response['companies'].map((x: News) =>
                Object.assign(new Company(), x)
            );

            this.filteredCompanies = this.companies;

        });
    }

    /**
     * Method for handling
     * global filter across data.
     *
     */
    onFilter(eventTarget: any) {

        const filteredValue = eventTarget.value;

        if (filteredValue.length < 3) {

            if (filteredValue.length == 0) {
                this.filteredCompanies = this.companies;
            }

            return;
        }

        this.filteredCompanies = this.companies.filter(x => x.name.toLocaleLowerCase().includes(filteredValue));
    }
}
