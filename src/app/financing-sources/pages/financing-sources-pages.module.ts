import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FinancingSourcesHomeComponent} from './financing-sources-home/financing-sources-home.component';
import {FinancingSourceInfoComponent} from './financing-source-info/financing-source-info.component';
import {FinancingSourcesComponentsModule} from "../components/financing-sources-components.module";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    declarations: [
        FinancingSourcesHomeComponent,
        FinancingSourceInfoComponent
    ],
    imports: [
        CommonModule,
        FinancingSourcesComponentsModule,
        TranslateModule
    ],
    exports: [
        FinancingSourcesHomeComponent,
        FinancingSourceInfoComponent
    ]
})
export class FinancingSourcesPagesModule {
}
