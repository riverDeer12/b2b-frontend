import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JobOffersComponent} from "./job-offers.component";
import {RouterModule} from "@angular/router";
import {JobOffersRoutes} from "./job-offers.routing";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {JobOffersPagesModule} from "./pages/job-offers-pages.module";

/**
 * Translation resources loader.
 *
 * @param http client for loading translations.
 */
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/job-offers/', '.json');
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
                deps: [HttpClient]
            },
            isolate: true
        }),
        JobOffersPagesModule
    ]
})
export class JobOffersModule {
}
