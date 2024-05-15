import {Component} from '@angular/core';
import {SpecialCategory} from "../../core/models/special-category";
import {ActivatedRoute} from "@angular/router";
import {FormType} from "../../../shared/enums/form-type";
import {Category} from "../../../categories/core/models/category";
import {Scientist} from "../../../scientists/core/models/scientist";
import {Company} from "../../../companies/core/models/company";
import {Organization} from "../../../organizations/core/models/organization";

@Component({
    selector: 'special-category-edit',
    templateUrl: './special-category-edit.component.html',
    styleUrls: ['./special-category-edit.component.scss']
})
export class SpecialCategoryEditComponent {
    specialCategory!: SpecialCategory;
    formType = FormType.Edit;
    returnUrl = '/admin/special-categories'

    scientists!: Scientist[];
    companies!: Company[];
    organizations!: Organization[];

    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.listenToResolver();
    }

    private listenToResolver() {
        this.activatedRoute.data.subscribe((response) => {
            this.specialCategory = Object.assign(response['specialCategory'], new SpecialCategory());

            this.scientists = response['scientists'].map((x: Scientist) =>
                Object.assign(new Scientist(), x)
            );

            this.companies = response['companies'].map((x: Company) =>
                Object.assign(new Company(), x)
            );

            this.organizations = response['organizations'].map((x: Organization) =>
                Object.assign(new Organization(), x)
            );
        });
    }
}
