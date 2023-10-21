import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JobOffersHomeComponent} from './job-offers-home/job-offers-home.component';
import {JobOfferCreateComponent} from './job-offer-create/job-offer-create.component';
import {JobOfferEditComponent} from './job-offer-edit/job-offer-edit.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {JobOffersComponentsModule} from '../components/job-offers-components.module';


@NgModule({
    declarations: [
        JobOffersHomeComponent,
        JobOfferCreateComponent,
        JobOfferEditComponent
    ],
    imports: [
        CommonModule,
        JobOffersComponentsModule,
        TranslateModule
    ],
    exports: [
        JobOffersHomeComponent,
        JobOfferCreateComponent,
        JobOfferEditComponent
    ]
})
export class JobOffersPagesModule {
}
