import {Component} from '@angular/core';
import {Company} from "../../../../companies/core/models/company";
import {ActivatedRoute} from "@angular/router";
import {News} from "../../../../news/core/models/news";

@Component({
    selector: 'public-companies',
    templateUrl: './public-companies.component.html',
    styleUrls: ['./public-companies.component.scss']
})
export class PublicCompaniesComponent {
    companies!: Company[]

    filteredCompanies!: Company[];

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

        console.log(filteredValue);

        this.filteredCompanies = this.companies.filter(x => x.name.toLocaleLowerCase().includes(filteredValue));

        console.log(this.filteredCompanies);
    }
}
