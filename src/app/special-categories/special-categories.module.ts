import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpecialCategoriesComponent} from './special-categories.component';
import {TranslateModule} from "@ngx-translate/core";
import {SpecialCategoriesPagesModule} from "./pages/special-categories-pages.module";
import {RouterModule} from "@angular/router";
import {SpecialCategoriesRoutes} from "./special-categories.routing";
import {TabViewModule} from "primeng/tabview";
import {CustomControlsModule} from "../custom-controls/custom-controls.module";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        SpecialCategoriesComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        SpecialCategoriesPagesModule,
        RouterModule.forChild(SpecialCategoriesRoutes),
        TabViewModule,
        CustomControlsModule,
        ButtonModule,
        InputTextModule,
        ReactiveFormsModule
    ]
})
export class SpecialCategoriesModule {
}
