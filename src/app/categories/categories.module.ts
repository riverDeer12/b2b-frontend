import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CategoriesRoutes} from './categories.routing';
import {CategoriesPagesModule} from './pages/categories-pages.module';
import {CategoriesComponent} from './categories.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {SharedModule} from '../shared/shared.module';

/**
 * Translation resources loader.
 *
 * @param http client for loading translations.
 */
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/categories/', '.json');
}

@NgModule({
    declarations: [
        CategoriesComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(CategoriesRoutes),
        CategoriesPagesModule,
        TranslateModule.forChild({
            defaultLanguage: 'hr',
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            },
            isolate: true
        }),
        SharedModule
    ]
})
export class CategoriesModule {
}
