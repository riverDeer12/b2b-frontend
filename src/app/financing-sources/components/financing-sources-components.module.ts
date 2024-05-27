import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    FinancingSourcesDataTableComponent
} from './financing-sources-data-table/financing-sources-data-table.component';
import {FinancingSourceDetailsComponent} from "./financing-source-details/financing-source-details.component";

@NgModule({
    declarations: [
        FinancingSourceDetailsComponent,
        FinancingSourcesDataTableComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        FinancingSourceDetailsComponent,
        FinancingSourcesDataTableComponent
    ]
})
export class FinancingSourcesComponentsModule {
}
