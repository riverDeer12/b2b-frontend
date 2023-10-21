import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CategoriesRoutes} from './categories.routing';
import {CategoriesPagesModule} from './pages/categories-pages.module';
import {CategoriesComponent} from './categories.component';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    declarations: [
        CategoriesComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(CategoriesRoutes),
        TranslateModule,
        SharedModule,
        CategoriesPagesModule
    ]
})
export class CategoriesModule {
}
