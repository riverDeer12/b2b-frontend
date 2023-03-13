import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CategoriesRoutes} from './categories.routing';
import {CategoriesPagesModule} from './pages/categories-pages.module';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(CategoriesRoutes),
        CategoriesPagesModule
    ]
})
export class CategoriesModule {
}
