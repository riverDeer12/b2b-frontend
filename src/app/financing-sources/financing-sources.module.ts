import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FinancingSourcesComponent} from './financing-sources.component';
import {RouterModule} from "@angular/router";
import {FinancingSourcesRoutes} from "./financing-sources.routing";
import {TranslateModule} from "@ngx-translate/core";
import {FinancingSourcesPagesModule} from "./pages/financing-sources-pages.module";

@NgModule({
    declarations: [
        FinancingSourcesComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        RouterModule.forChild(FinancingSourcesRoutes),
        FinancingSourcesPagesModule
    ]
})
export class FinancingSourcesModule {
}
