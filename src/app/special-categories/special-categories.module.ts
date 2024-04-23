import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpecialCategoriesComponent} from './special-categories.component';
import {TranslateModule} from "@ngx-translate/core";
import {SpecialCategoriesPagesModule} from "./pages/special-categories-pages.module";
import {RouterModule} from "@angular/router";
import {SpecialCategoriesRoutes} from "./special-categories.routing";


@NgModule({
    declarations: [
        SpecialCategoriesComponent,
    ],
    imports: [
        CommonModule,
        TranslateModule,
        SpecialCategoriesPagesModule,
        RouterModule.forChild(SpecialCategoriesRoutes)
    ]
})
export class SpecialCategoriesModule {
}
