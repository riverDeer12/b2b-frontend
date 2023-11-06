import {Component} from '@angular/core';
import {Category} from '../../../../categories/core/models/category';
import {EntityType} from '../../../../auth/core/enums/entity-type';
import {ActivatedRoute} from '@angular/router';
import {JobOffer} from '../../../../job-offers/core/models/job-offer';

@Component({
    selector: 'public-job-offers',
    templateUrl: './public-job-offers.component.html',
    styleUrls: ['./public-job-offers.component.scss']
})
export class PublicJobOffersComponent {
    jobOffers!: JobOffer[];
    categories!: Category[];
    parentEntityType: EntityType = EntityType.JobOffer;

    public get type(): typeof EntityType {
        return EntityType;
    }

    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.listenToResolver();
    }

    listenToResolver(): void {
        this.activatedRoute.data.subscribe((response) => {

            this.jobOffers = response['jobOffers'].map((x: JobOffer) =>
                Object.assign(new JobOffer(), x)
            );

            this.categories = response['categories'].map((x: Category) =>
                Object.assign(new Category(), x)
            );
        });
    }
}
