import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {ActivatedRoute} from '@angular/router';
import {News} from '../../../news/core/models/news';
import {JobOffer} from "../../core/models/job-offer";

@Component({
  selector: 'job-offers-home',
  templateUrl: './job-offers-home.component.html',
  styleUrls: ['./job-offers-home.component.css']
})
export class JobOffersHomeComponent implements OnInit {
    jobOffers: JobOffer[] = [];

    constructor(private translateService: TranslateService, private activatedRoute: ActivatedRoute) {
        this.listenToResolver();
    }

    ngOnInit(): void {
        this.translateService.use('hr')
    }

    private listenToResolver() {
        this.activatedRoute.data.subscribe((response) => {
            this.jobOffers = response['jobOffers'].map((x: News) =>
                Object.assign(new JobOffer(), x)
            );
        });
    }

}
