import {Component} from '@angular/core';
import {FormType} from "../../../shared/enums/form-type";
import {ActivatedRoute} from "@angular/router";
import {NewsletterAdditionalContent} from "../../core/models/newsletter-additional-content";

@Component({
    selector: 'newsletter-edit',
    templateUrl: './newsletter-edit.component.html',
    styleUrls: ['./newsletter-edit.component.scss']
})
export class NewsletterEditComponent {

    returnUrl = "/admin/newsletters";

    formType = FormType.Edit;

    newsletter!: NewsletterAdditionalContent;

    constructor(private activatedRoute: ActivatedRoute) {
        this.listenToResolver();
    }

    ngOnInit(): void {
    }

    private listenToResolver() {
        this.activatedRoute.data.subscribe((response) => {
            this.newsletter = Object.assign(new NewsletterAdditionalContent(), response["newsletter"]);
        });
    }
}
