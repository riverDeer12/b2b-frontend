import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewslettersHomeComponent} from './newsletters-home/newsletters-home.component';
import {NewsletterAdditionalContentCreateComponent} from './newsletter-additional-content-create/newsletter-additional-content-create.component';
import {NewsletterAdditionalContentEditComponent} from './newsletter-additional-content-edit/newsletter-additional-content-edit.component';
import {NewslettersComponentsModule} from '../components/newsletters-components.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    declarations: [
        NewslettersHomeComponent,
        NewsletterAdditionalContentCreateComponent,
        NewsletterAdditionalContentEditComponent,
    ],
    imports: [
        CommonModule,
        NewslettersComponentsModule,
        TranslateModule
    ],
    exports: [
        NewslettersHomeComponent,
        NewsletterAdditionalContentCreateComponent,
        NewsletterAdditionalContentEditComponent,
    ]
})
export class NewslettersPagesModule {
}
