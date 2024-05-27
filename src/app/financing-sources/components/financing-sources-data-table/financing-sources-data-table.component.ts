import { Component, Input } from '@angular/core';
import {FinancingSource} from "../../core/models/financing-source";

@Component({
  selector: 'financing-sources-data-table',
  templateUrl: './financing-sources-data-table.component.html',
  styleUrls: ['./financing-sources-data-table.component.scss']
})
export class FinancingSourcesDataTableComponent {
    @Input() financingSources!: FinancingSource[];
}
