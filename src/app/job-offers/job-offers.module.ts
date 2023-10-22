import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JobOffersComponent} from './job-offers.component';
import {RouterModule} from '@angular/router';
import {JobOffersRoutes} from './job-offers.routing';
import {TranslateModule} from '@ngx-translate/core';
import {JobOffersPagesModule} from './pages/job-offers-pages.module';
import {ConfirmationService} from 'primeng/api';

@NgModule({
    declarations: [JobOffersComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(JobOffersRoutes),
        TranslateModule,
        JobOffersPagesModule
    ],
    providers: [ConfirmationService]
})
export class JobOffersModule {
}
