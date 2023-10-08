import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutUsComponent} from './about-us/about-us.component';
import {LandingComponent} from './landing/landing.component';
import {MainSearchComponent} from './main-search/main-search.component';
import {PublicCompaniesComponent} from './public-companies/public-companies.component';
import {PublicNewsComponent} from './public-news/public-news.component';
import {PublicOrganizationsComponent} from './public-organizations/public-organizations.component';
import {PublicScientistsComponent} from './public-scientists/public-scientists.component';
import {RegistrationComponent} from './registration/registration.component';
import {PublicLayoutComponentsModule} from '../components/public-layout-components.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpBackend} from '@angular/common/http';
import {MultiTranslateHttpLoader} from 'ngx-translate-multi-http-loader';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CompaniesComponentsModule} from '../../../companies/components/companies-components.module';
import {ScientistsComponentsModule} from '../../../scientists/components/scientists-components.module';
import {OrganizationsComponentsModule} from '../../../organizations/components/organizations-components.module';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
        AboutUsComponent,
        LandingComponent,
        MainSearchComponent,
        PublicCompaniesComponent,
        PublicNewsComponent,
        PublicOrganizationsComponent,
        PublicScientistsComponent,
        RegistrationComponent
    ],
    imports: [
        CommonModule,
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpBackend]
            },
            isolate: true
        }),
        RouterModule,
        PublicLayoutComponentsModule,
        RadioButtonModule,
        CompaniesComponentsModule,
        ScientistsComponentsModule,
        OrganizationsComponentsModule,
        ButtonModule,
        RippleModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports: [
        AboutUsComponent,
        LandingComponent,
        MainSearchComponent,
        PublicCompaniesComponent,
        PublicNewsComponent,
        PublicOrganizationsComponent,
        PublicScientistsComponent,
        RegistrationComponent
    ]
})
export class PublicLayoutPagesModule {
}
