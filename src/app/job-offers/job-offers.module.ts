import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JobOffersComponent} from "./job-offers.component";
import {RouterModule} from "@angular/router";
import {JobOffersRoutes} from "./job-offers.routing";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpBackend} from '@angular/common/http';
import {JobOffersPagesModule} from "./pages/job-offers-pages.module";
import {MultiTranslateHttpLoader} from 'ngx-translate-multi-http-loader';

/**
 * Translation resources loader.
 *
 * @param http client for loading translations.
 */
export function createTranslateLoader(http: HttpBackend) {
    return new MultiTranslateHttpLoader(http, [
        './assets/i18n/job-offers/',
        './assets/i18n/shared/'
    ]);
}


@NgModule({
    declarations: [JobOffersComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(JobOffersRoutes),
        TranslateModule.forChild({
            defaultLanguage: 'hr',
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpBackend]
            },
            isolate: true
        }),
        JobOffersPagesModule
    ]
})
export class JobOffersModule {
}
