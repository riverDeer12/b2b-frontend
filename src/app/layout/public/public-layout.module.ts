import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PublicLayoutComponent} from './public-layout.component';
import {RouterModule} from '@angular/router';
import {PublicLayoutRoutes} from './public-layout.routing';
import {HttpBackend} from '@angular/common/http';
import {MultiTranslateHttpLoader} from 'ngx-translate-multi-http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {NavbarComponent} from './components/navbar/navbar.component';
import {RippleModule} from 'primeng/ripple';
import {ButtonModule} from 'primeng/button';
import {LandingComponent} from './pages/landing/landing.component';
import {StyleClassModule} from 'primeng/styleclass';
import {DividerModule} from 'primeng/divider';
import {SimpleEntityCardComponent} from './components/simple-entity-card/simple-entity-card.component';
import {PublicFooterComponent} from './components/public-footer/public-footer.component';
import {LatestComponent} from './components/latest/latest.component';
import {PublicCompaniesComponent} from './pages/public-companies/public-companies.component';
import {EntityCardComponent} from './components/entity-card/entity-card.component';
import {DataViewModule} from "primeng/dataview";
import {InputTextModule} from "primeng/inputtext";
import {PublicOrganizationsComponent} from './pages/public-organizations/public-organizations.component';
import {PublicNewsComponent} from './pages/public-news/public-news.component';
import {PublicScientistsComponent} from './pages/public-scientists/public-scientists.component';
import {MainSearchComponent} from './pages/main-search/main-search.component';
import {AboutUsComponent} from './pages/about-us/about-us.component';
import {RegistrationComponent} from './components/registration/registration.component';
import { PublicHeaderComponent } from './components/public-header/public-header.component';
import {CardModule} from "primeng/card";
import { OrganizationDetailsComponent } from './components/details/organization-details/organization-details.component';
import { ScientistDetailsComponent } from './components/details/scientist-details/scientist-details.component';
import { CompanyDetailsComponent } from './components/details/company-details/company-details.component';
import { NewsDetailsComponent } from './components/details/news-details/news-details.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import {CompaniesComponentsModule} from "../../companies/components/companies-components.module";
import {OrganizationsComponentsModule} from "../../organizations/components/organizations-components.module";
import {ScientistsComponentsModule} from "../../scientists/components/scientists-components.module";


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
        PublicLayoutComponent,
        LandingComponent,
        NavbarComponent,
        SimpleEntityCardComponent,
        PublicFooterComponent,
        LatestComponent,
        PublicCompaniesComponent,
        EntityCardComponent,
        PublicOrganizationsComponent,
        PublicNewsComponent,
        PublicScientistsComponent,
        MainSearchComponent,
        AboutUsComponent,
        RegistrationComponent,
        PublicHeaderComponent,
        OrganizationDetailsComponent,
        ScientistDetailsComponent,
        CompanyDetailsComponent,
        NewsDetailsComponent,
        MyProfileComponent
    ],
    exports: [
        NavbarComponent,
        SimpleEntityCardComponent,
        PublicFooterComponent,
        LatestComponent,
        PublicCompaniesComponent,
        EntityCardComponent,
        PublicOrganizationsComponent,
        PublicNewsComponent,
        PublicScientistsComponent,
        MainSearchComponent,
        AboutUsComponent,
        RegistrationComponent,
        PublicHeaderComponent,
        OrganizationDetailsComponent,
        ScientistDetailsComponent,
        CompanyDetailsComponent,
        NewsDetailsComponent,
        MyProfileComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(PublicLayoutRoutes),
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpBackend]
            },
            isolate: true
        }),
        RippleModule,
        ButtonModule,
        StyleClassModule,
        DividerModule,
        DataViewModule,
        InputTextModule,
        CardModule,
        CompaniesComponentsModule,
        OrganizationsComponentsModule,
        ScientistsComponentsModule
    ]
})
export class PublicLayoutModule {
}
