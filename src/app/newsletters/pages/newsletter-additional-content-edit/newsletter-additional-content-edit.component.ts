import {Component} from '@angular/core';
import {FormType} from "../../../shared/enums/form-type";
import {ActivatedRoute} from "@angular/router";
import {NewsletterAdditionalContent} from "../../core/models/newsletter-additional-content";

@Component({
    selector: 'newsletter-additional-content-edit',
    templateUrl: './newsletter-additional-content-edit.component.html',
    styleUrls: ['./newsletter-additional-content-edit.component.scss']
})
export class NewsletterAdditionalContentEditComponent {

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
