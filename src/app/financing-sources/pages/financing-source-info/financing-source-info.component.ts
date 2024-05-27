import { Component } from '@angular/core';
import {FinancingSource} from "../../core/models/financing-source";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'financing-source-info',
  templateUrl: './financing-source-info.component.html',
  styleUrls: ['./financing-source-info.component.scss']
})
export class FinancingSourceInfoComponent {
    financingSource!: FinancingSource;

    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.listenToResolver();
    }

    private listenToResolver() {
        this.activatedRoute.data.subscribe((response) => {
            this.financingSource = Object.assign(response['financingSource'], new FinancingSource());
        });
    }
}
