import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    SpecialCategoriesDataTableComponent
} from "./special-categories-data-table/special-categories-data-table.component";
import {SpecialCategoryFormComponent} from "./special-category-form/special-category-form.component";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {RippleModule} from "primeng/ripple";
import {TabViewModule} from "primeng/tabview";
import {ReactiveFormsModule} from "@angular/forms";
import {CustomControlsModule} from "../../custom-controls/custom-controls.module";
import {InputTextModule} from "primeng/inputtext";
import {TranslateModule} from "@ngx-translate/core";
import {MultiSelectModule} from "primeng/multiselect";
import {
    SpecialCategoryAssignFormComponent
} from './special-category-assign-form/special-category-assign-form.component';
import { SpecialCategoriesSelectorComponent } from './special-categories-selector/special-categories-selector.component';


@NgModule({
    declarations: [
        SpecialCategoriesDataTableComponent,
        SpecialCategoryFormComponent,
        SpecialCategoryAssignFormComponent,
        SpecialCategoriesSelectorComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        TableModule,
        ButtonModule,
        ConfirmDialogModule,
        RippleModule,
        TabViewModule,
        ReactiveFormsModule,
        CustomControlsModule,
        InputTextModule,
        MultiSelectModule
    ],
    exports: [
        SpecialCategoriesDataTableComponent,
        SpecialCategoryFormComponent,
        SpecialCategoryAssignFormComponent,
        SpecialCategoriesSelectorComponent
    ]
})
export class SpecialCategoriesComponentsModule {
}
