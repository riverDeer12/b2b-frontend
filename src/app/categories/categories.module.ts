import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CategoriesRoutes} from './categories.routing';
import {CategoriesPagesModule} from './pages/categories-pages.module';
import {CategoriesComponent} from './categories.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpBackend} from '@angular/common/http';
import {SharedModule} from '../shared/shared.module';
import {MultiTranslateHttpLoader} from 'ngx-translate-multi-http-loader';

/**
 * Translation resources loader.
 *
 * @param http client for loading translations.
 */
export function createTranslateLoader(http: HttpBackend) {
    return new MultiTranslateHttpLoader(http, [
        './assets/i18n/categories/',
        './assets/i18n/shared/'
    ]);
}


@NgModule({
    declarations: [
        CategoriesComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(CategoriesRoutes),
        TranslateModule.forChild({
            defaultLanguage: 'hr',
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpBackend]
            },
            isolate: true
        }),
        SharedModule,
        CategoriesPagesModule
    ]
})
export class CategoriesModule {
}
