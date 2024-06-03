import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    FinancingSourcesDataTableComponent
} from './financing-sources-data-table/financing-sources-data-table.component';
import {FinancingSourceDetailsComponent} from "./financing-source-details/financing-source-details.component";
import {TableModule} from "primeng/table";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    declarations: [
        FinancingSourceDetailsComponent,
        FinancingSourcesDataTableComponent
    ],
    imports: [
        CommonModule,
        TableModule,
        InputTextModule,
        ButtonModule,
        RippleModule,
        TranslateModule
    ],
    exports: [
        FinancingSourceDetailsComponent,
        FinancingSourcesDataTableComponent
    ]
})
export class FinancingSourcesComponentsModule {
}
