import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScientistsPagesModule} from './pages/scientists-pages.module';
import {ScientistsComponent} from './scientists.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpBackend} from '@angular/common/http';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {ScientistsRoutes} from './scientists.routing';
import {MultiTranslateHttpLoader} from 'ngx-translate-multi-http-loader';
import {DialogService} from 'primeng/dynamicdialog';

/**
 * Translation resources loader.
 *
 * @param http client for loading translations.
 */
export function createTranslateLoader(http: HttpBackend) {
    return new MultiTranslateHttpLoader(http, [
        './assets/i18n/scientists/',
        './assets/i18n/shared/'
    ]);
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
                deps: [HttpBackend]
            },
            isolate: true
        }),
        SharedModule
    ],
    providers:[
        DialogService
    ]

})
export class ScientistsModule {
}
