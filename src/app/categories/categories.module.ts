import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CategoriesRoutes} from './categories.routing';
import {CategoriesPagesModule} from './pages/categories-pages.module';
import {CategoriesComponent} from './categories.component';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    declarations: [
        CategoriesComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(CategoriesRoutes),
        TranslateModule,
        CategoriesPagesModule
    ]
})
export class CategoriesModule {
}
