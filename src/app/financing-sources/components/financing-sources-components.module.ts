import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FinancingSourcesDetailsComponent} from './financing-sources-details/financing-sources-details.component';
import {
    FinancingSourcesDataTableComponent
} from './financing-sources-data-table/financing-sources-data-table.component';

@NgModule({
    declarations: [
        FinancingSourcesDetailsComponent,
        FinancingSourcesDataTableComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        FinancingSourcesDetailsComponent,
        FinancingSourcesDataTableComponent
    ]
})
export class FinancingSourcesComponentsModule {
}
