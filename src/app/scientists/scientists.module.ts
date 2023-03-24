import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScientistsPagesModule} from './pages/scientists-pages.module';
import {ScientistsComponent} from './scientists.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {ScientistsRoutes} from './scientists.routing';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

/**
 * Translation resources loader.
 *
 * @param http client for loading translations.
 */
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/scientists/', '.json');
}

@NgModule({
    declarations: [
        ScientistsComponent
    ],
    imports: [
        CommonModule,
        ScientistsPagesModule,
        RouterModule.forChild(ScientistsRoutes),
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
    ],
})
export class ScientistsModule {
}
