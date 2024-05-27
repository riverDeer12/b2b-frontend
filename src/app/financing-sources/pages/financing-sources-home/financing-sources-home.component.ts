import { Component } from '@angular/core';
import {FinancingSource} from "../../core/models/financing-source";
import {ActivatedRoute} from "@angular/router";
import {Category} from "../../../categories/core/models/category";

@Component({
  selector: 'financing-sources-home',
  templateUrl: './financing-sources-home.component.html',
  styleUrls: ['./financing-sources-home.component.scss']
})
export class FinancingSourcesHomeComponent {
    financingSources!: FinancingSource[];

    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.listenToResolver();
    }

    private listenToResolver() {
        this.activatedRoute.data.subscribe((response) => {
            this.financingSources = response['financingSources'].map((x: FinancingSource) =>
                Object.assign(new FinancingSource(), x)
            );
        });
    }
}
