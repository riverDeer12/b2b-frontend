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
import {TranslateModule} from '@ngx-translate/core';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CompaniesComponentsModule} from '../../../companies/components/companies-components.module';
import {ScientistsComponentsModule} from '../../../scientists/components/scientists-components.module';
import {OrganizationsComponentsModule} from '../../../organizations/components/organizations-components.module';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {EntityDetailsComponent} from './entity-details/entity-details.component';
import {CardModule} from 'primeng/card';
import {TagModule} from 'primeng/tag';
import {ChipsModule} from 'primeng/chips';
import {DividerModule} from 'primeng/divider';
import {TabViewModule} from 'primeng/tabview';
import {PublicCompanyResearchProblemsComponent} from './public-company-research-problems/public-company-research-problems.component';
import {PublicEquipmentComponent} from './public-equipment/public-equipment.component';
import {PublicSpecificKnowledgeComponent} from './public-specific-knowledge/public-specific-knowledge.component';
import {PublicJobOffersComponent} from './public-job-offers/public-job-offers.component';
import {PublicMostPopularComponent} from './public-most-popular/public-most-popular.component';
import {ActivitiesPagesModule} from "../../../activities/pages/activities-pages.module";
import {ActivitiesComponentsModule} from "../../../activities/components/activities-components.module";
import { PublicOrganizationResearchProblemsComponent } from './public-organization-research-problems/public-organization-research-problems.component';
import { PublicProductsComponent } from './public-products/public-products.component';

@NgModule({
    declarations: [
        AboutUsComponent,
        LandingComponent,
        MainSearchComponent,
        PublicCompaniesComponent,
        PublicNewsComponent,
        PublicOrganizationsComponent,
        PublicScientistsComponent,
        RegistrationComponent,
        EntityDetailsComponent,
        PublicCompanyResearchProblemsComponent,
        PublicEquipmentComponent,
        PublicSpecificKnowledgeComponent,
        PublicJobOffersComponent,
        PublicMostPopularComponent,
        PublicOrganizationResearchProblemsComponent,
        PublicProductsComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        RouterModule,
        PublicLayoutComponentsModule,
        RadioButtonModule,
        CompaniesComponentsModule,
        ScientistsComponentsModule,
        OrganizationsComponentsModule,
        ButtonModule,
        RippleModule,
        ReactiveFormsModule,
        FormsModule,
        CardModule,
        TagModule,
        ChipsModule,
        DividerModule,
        TabViewModule,
        ActivitiesPagesModule,
        ActivitiesComponentsModule
    ],
    exports: [
        AboutUsComponent,
        LandingComponent,
        MainSearchComponent,
        PublicCompaniesComponent,
        PublicNewsComponent,
        PublicOrganizationsComponent,
        PublicScientistsComponent,
        RegistrationComponent,
        EntityDetailsComponent,
        PublicCompanyResearchProblemsComponent,
        PublicProductsComponent
    ]
})
export class PublicLayoutPagesModule {
}
