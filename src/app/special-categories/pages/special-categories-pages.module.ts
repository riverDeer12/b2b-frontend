import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpecialCategoriesHomeComponent} from "./special-categories-home/special-categories-home.component";
import {SpecialCategoryEditComponent} from './special-category-edit/special-category-edit.component';
import {SpecialCategoryCreateComponent} from './special-category-create/special-category-create.component';
import {SpecialCategoriesComponentsModule} from "../components/special-categories-components.module";
import {CategoriesComponentsModule} from "../../categories/components/categories-components.module";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
    declarations: [
        SpecialCategoriesHomeComponent,
        SpecialCategoryEditComponent,
        SpecialCategoryCreateComponent
    ],
    imports: [
        CommonModule,
        SpecialCategoriesComponentsModule,
        CategoriesComponentsModule,
        TranslateModule
    ],
    exports: [
        SpecialCategoriesHomeComponent,
        SpecialCategoryEditComponent
    ]
})
export class SpecialCategoriesPagesModule {
}
