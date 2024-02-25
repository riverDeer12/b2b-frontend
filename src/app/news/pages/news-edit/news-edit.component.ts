import {Component} from '@angular/core';
import {FormType} from "../../../shared/enums/form-type";
import {TranslateService} from "@ngx-translate/core";
import {ActivatedRoute} from "@angular/router";
import {News} from "../../core/models/news";

@Component({
    selector: 'newsletter-edit',
    templateUrl: './news-edit.component.html',
    styleUrls: ['./news-edit.component.scss']
})
export class NewsEditComponent {

    returnUrl = "/admin/news";

    formType = FormType.Edit;

    news!: News;

    constructor(private translateService: TranslateService, private activatedRoute: ActivatedRoute) {
        this.listenToResolver();
    }

    ngOnInit(): void {
    }

    private listenToResolver() {
        this.activatedRoute.data.subscribe((response) => {
            this.news = Object.assign(new News(), response["news"]);
        });
    }
}
