import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoriesHomeComponent} from './categories-home/categories-home.component';
import {CategoryCreateComponent} from './category-create/category-create.component';
import {CategoryEditComponent} from './category-edit/category-edit.component';


@NgModule({
    declarations: [
        CategoriesHomeComponent,
        CategoryCreateComponent,
        CategoryEditComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CategoriesHomeComponent,
        CategoryCreateComponent,
        CategoryEditComponent
    ]
})
export class CategoriesPagesModule {
}
