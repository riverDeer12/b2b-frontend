import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SimpleEntityCardComponent} from './simple-entity-card/simple-entity-card.component';
import {EntityCardComponent} from './entity-card/entity-card.component';
import {LatestComponent} from './latest/latest.component';
import {MyProfileComponent} from './my-profile/my-profile.component';
import {NavbarComponent} from './navbar/navbar.component';
import {PublicFooterComponent} from './public-footer/public-footer.component';
import {PublicHeaderComponent} from './public-header/public-header.component';
import {CompanyDetailsComponent} from './details/company-details/company-details.component';
import {OrganizationDetailsComponent} from './details/organization-details/organization-details.component';
import {ScientistDetailsComponent} from './details/scientist-details/scientist-details.component';
import {NewsDetailsComponent} from './details/news-details/news-details.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpBackend} from '@angular/common/http';
import {MultiTranslateHttpLoader} from 'ngx-translate-multi-http-loader';
import {OrganizationsComponentsModule} from '../../../organizations/components/organizations-components.module';
import {CompaniesComponentsModule} from '../../../companies/components/companies-components.module';
import {ScientistsComponentsModule} from '../../../scientists/components/scientists-components.module';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {DividerModule} from 'primeng/divider';
import {DataViewModule} from 'primeng/dataview';
import {EntityDataViewComponent} from './entity-data-view/entity-data-view.component';
import {InputTextModule} from 'primeng/inputtext';
import {RouterModule} from '@angular/router';

/**
 * Translation resources loader.
 *
 * @param http client for loading translations.
 */
export function createTranslateLoader(http: HttpBackend) {
    return new MultiTranslateHttpLoader(http, [
        './assets/i18n/layouts/public/',
        './assets/i18n/shared/'
    ]);
}


@NgModule({
    declarations: [
        SimpleEntityCardComponent,
        EntityCardComponent,
        LatestComponent,
        MyProfileComponent,
        NavbarComponent,
        PublicFooterComponent,
        PublicHeaderComponent,
        CompanyDetailsComponent,
        OrganizationDetailsComponent,
        ScientistDetailsComponent,
        NewsDetailsComponent,
        EntityDataViewComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpBackend]
            },
            isolate: true
        }),
        OrganizationsComponentsModule,
        CompaniesComponentsModule,
        ScientistsComponentsModule,
        CardModule,
        ButtonModule,
        RippleModule,
        DividerModule,
        DataViewModule,
        InputTextModule
    ],
    exports: [
        SimpleEntityCardComponent,
        EntityCardComponent,
        LatestComponent,
        MyProfileComponent,
        NavbarComponent,
        PublicFooterComponent,
        PublicHeaderComponent,
        CompanyDetailsComponent,
        OrganizationDetailsComponent,
        ScientistDetailsComponent,
        NewsDetailsComponent,
        EntityDataViewComponent
    ]
})
export class PublicLayoutComponentsModule {
}
