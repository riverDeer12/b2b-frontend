import { Component } from '@angular/core';
import {Recipient, RecipientType} from "../../core/models/free-form-newsletter";
import {ActivatedRoute} from "@angular/router";
import {Company} from "../../../../companies/core/models/company";
import {Organization} from "../../../../organizations/core/models/organization";
import {Scientist} from "../../../../scientists/core/models/scientist";
import {Category} from "../../../../categories/core/models/category";

@Component({
  selector: 'free-form-newsletter-additional-content-create',
  templateUrl: './free-form-newsletter-create.component.html',
  styleUrls: ['./free-form-newsletter-create.component.scss']
})
export class FreeFormNewsletterCreateComponent {
    returnUrl = '/admin/newsletters/free-form';
    companies!: Recipient[];
    organizations!: Recipient[];
    scientists!: Recipient[];
    categories!: Category[];

    constructor(private activatedRoute:ActivatedRoute) {
    }

    ngOnInit(): void{
        this.listenToResolver();
    }

    private listenToResolver() {
        this.activatedRoute.data.subscribe((response) => {

            this.categories = response['categories'].map((x: Category) =>
                Object.assign(new Category(), x)
            );

            this.companies = response['companies'].map((x: Company) =>
                Object.assign(new Recipient(), x)
            );

            for (const company of this.companies) {
                company['userType'] = RecipientType.Company;
                company['userId'] = company.id;
            }

            this.organizations = response['organizations'].map((x: Organization) =>
                Object.assign(new Recipient(), x)
            );

            for (const organization of this.organizations) {
                organization['userType'] = RecipientType.PublicOrganization;
                organization['userId'] = organization.id;
            }

            this.scientists = response['scientists'].map((x: Scientist) =>
                Object.assign(new Recipient(), x)
            );

            for (const scientist of this.scientists) {
                scientist['userType'] = RecipientType.Scientist;
                scientist['userId'] = scientist.id;
            }
        });
    }
}
