import {Component} from '@angular/core';
import {FinancingSource} from "../../../../financing-sources/core/models/financing-source";
import {ActivatedRoute} from "@angular/router";
import {EntityType} from "../../../../auth/core/enums/entity-type";

@Component({
    selector: 'public-financing-sources',
    templateUrl: './public-financing-sources.component.html',
    styleUrls: ['./public-financing-sources.component.scss']
})
export class PublicFinancingSourcesComponent {
    financingSources!: FinancingSource[];

    public get type(): typeof EntityType {
        return EntityType;
    }

    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.listenToResolver();
    }

    listenToResolver(): void {
        this.activatedRoute.data.subscribe((response) => {
            this.financingSources = response['financingSources'].map((x: FinancingSource) =>
                Object.assign(new FinancingSource(), x)
            );
        });
    }
}
