import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewslettersHomeComponent} from './newsletters-home/newsletters-home.component';
import {NewsletterCreateComponent} from './newsletter-create/newsletter-create.component';
import {NewsletterEditComponent} from './newsletter-edit/newsletter-edit.component';
import {NewslettersComponentsModule} from '../components/newsletters-components.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    declarations: [
        NewslettersHomeComponent,
        NewsletterCreateComponent,
        NewsletterEditComponent,
    ],
    imports: [
        CommonModule,
        NewslettersComponentsModule,
        TranslateModule
    ],
    exports: [
        NewslettersHomeComponent,
        NewsletterCreateComponent,
        NewsletterEditComponent,
    ]
})
export class NewslettersPagesModule {
}
