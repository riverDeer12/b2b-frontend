import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoriesHomeComponent} from './categories-home/categories-home.component';
import {CategoryCreateComponent} from './category-create/category-create.component';
import {CategoryEditComponent} from './category-edit/category-edit.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {CategoriesComponentsModule} from '../components/categories-components.module';


@NgModule({
    declarations: [
        CategoriesHomeComponent,
        CategoryCreateComponent,
        CategoryEditComponent
    ],
    imports: [
        CommonModule,
        CategoriesComponentsModule,
        TranslateModule
    ],
    exports: [
        CategoriesHomeComponent,
        CategoryCreateComponent,
        CategoryEditComponent
    ]
})
export class CategoriesPagesModule {
}
