import { Component } from '@angular/core';
import {FormType} from '../../../shared/enums/form-type';
import {TranslateService} from '@ngx-translate/core';
import {ActivatedRoute} from '@angular/router';
import {JobOffer} from "../../core/models/job-offer";

@Component({
  selector: 'job-offer-edit',
  templateUrl: './job-offer-edit.component.html',
  styleUrls: ['./job-offer-edit.component.scss']
})
export class JobOfferEditComponent {
    returnUrl = "/admin/job-offers";

    formType = FormType.Edit;

    jobOffer!: JobOffer;

    constructor(private translateService: TranslateService, private activatedRoute: ActivatedRoute) {
        this.listenToResolver();
    }

    ngOnInit(): void {
    }

    private listenToResolver() {
        this.activatedRoute.data.subscribe((response) => {
            this.jobOffer = Object.assign(new JobOffer(), response["jobOffer"]);
        });
    }
}
