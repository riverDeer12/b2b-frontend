import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SimpleEntityCardComponent} from './simple-entity-card/simple-entity-card.component';
import {EntityCardComponent} from './entity-card/entity-card.component';
import {LatestComponent} from './latest/latest.component';
import {MyProfileComponent} from './my-profile/my-profile.component';
import {NavbarComponent} from './navbar/navbar.component';
import {PublicFooterComponent} from './public-footer/public-footer.component';
import {PublicHeaderComponent} from './public-header/public-header.component';
import {TranslateModule} from '@ngx-translate/core';
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
import {TagModule} from 'primeng/tag';
import {CategoriesComponentsModule} from '../../../categories/components/categories-components.module';


@NgModule({
    declarations: [
        SimpleEntityCardComponent,
        EntityCardComponent,
        LatestComponent,
        MyProfileComponent,
        NavbarComponent,
        PublicFooterComponent,
        PublicHeaderComponent,
        EntityDataViewComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        TranslateModule,
        OrganizationsComponentsModule,
        CompaniesComponentsModule,
        ScientistsComponentsModule,
        CategoriesComponentsModule,
        CardModule,
        ButtonModule,
        RippleModule,
        DividerModule,
        DataViewModule,
        InputTextModule,
        TagModule
    ],
    exports: [
        SimpleEntityCardComponent,
        EntityCardComponent,
        LatestComponent,
        MyProfileComponent,
        NavbarComponent,
        PublicFooterComponent,
        PublicHeaderComponent,
        EntityDataViewComponent
    ]
})
export class PublicLayoutComponentsModule {
}
