import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpecialCategoriesHomeComponent} from "./special-categories-home/special-categories-home.component";
import {SpecialCategoryEditComponent} from './special-category-edit/special-category-edit.component';
import { SpecialCategoryCreateComponent } from './special-category-create/special-category-create.component';


@NgModule({
    declarations: [
        SpecialCategoriesHomeComponent,
        SpecialCategoryEditComponent,
        SpecialCategoryCreateComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        SpecialCategoriesHomeComponent,
        SpecialCategoryEditComponent
    ]
})
export class SpecialCategoriesPagesModule {
}
