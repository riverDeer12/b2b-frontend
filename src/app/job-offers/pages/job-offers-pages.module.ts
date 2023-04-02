import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JobOffersHomeComponent} from './job-offers-home/job-offers-home.component';
import {JobOfferCreateComponent} from './job-offer-create/job-offer-create.component';
import {JobOfferEditComponent} from './job-offer-edit/job-offer-edit.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {JobOffersComponentsModule} from '../components/job-offers-components.module';

/**
 * Translation resources loader.
 *
 * @param http client for loading translations.
 */
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/job-offers/', '.json');
}


@NgModule({
    declarations: [
        JobOffersHomeComponent,
        JobOfferCreateComponent,
        JobOfferEditComponent
    ],
    imports: [
        CommonModule,
        JobOffersComponentsModule,
        TranslateModule.forChild({
            defaultLanguage: 'hr',
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            },
            isolate: true
        })
    ],
    exports: [
        JobOffersHomeComponent,
        JobOfferCreateComponent,
        JobOfferEditComponent
    ]
})
export class JobOffersPagesModule {
}
