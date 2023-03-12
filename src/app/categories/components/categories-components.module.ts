import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoryFormComponent} from './category-form/category-form.component';
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        CategoryFormComponent
    ],
    imports: [
        CommonModule,
        InputTextModule,
        ButtonModule,
        ReactiveFormsModule
    ],
    exports: [
        CategoryFormComponent
    ]
})
export class CategoriesComponentsModule {
}
