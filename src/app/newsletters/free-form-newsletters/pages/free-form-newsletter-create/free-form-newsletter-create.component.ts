import { Component } from '@angular/core';
import {Recipient, RecipientType} from "../../core/models/free-form-newsletter";
import {ActivatedRoute} from "@angular/router";

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

    constructor(private activatedRoute:ActivatedRoute) {
    }

    ngOnInit(): void{
        this.listenToResolver();
    }

    private listenToResolver() {
        this.activatedRoute.data.subscribe((response) => {

            this.companies = response['companies'].map((x: any) =>
                Object.assign(new Recipient(), x)
            );

            for (const company of this.companies) {
                company['userType'] = RecipientType.Company;
                company['userId'] = company.id;
            }

            this.organizations = response['organizations'].map((x: any) =>
                Object.assign(new Recipient(), x)
            );

            for (const organization of this.organizations) {
                organization['userType'] = RecipientType.PublicOrganization;
                organization['userId'] = organization.id;
            }

            this.scientists = response['scientists'].map((x: any) =>
                Object.assign(new Recipient(), x)
            );

            for (const scientist of this.scientists) {
                scientist['userType'] = RecipientType.Scientist;
                scientist['userId'] = scientist.id;
            }
        });
    }
}
