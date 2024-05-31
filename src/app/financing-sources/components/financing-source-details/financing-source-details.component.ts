import {Component, Input} from '@angular/core';
import {FinancingSource} from "../../core/models/financing-source";
import {Category} from "../../../categories/core/models/category";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'financing-source-details',
    templateUrl: './financing-source-details.component.html',
    styleUrls: ['./financing-source-details.component.scss']
})
export class FinancingSourceDetailsComponent {
    @Input() financingSource!: FinancingSource;
}
