import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewslettersHomeComponent} from './newsletters-home/newsletters-home.component';
import {NewsletterCreateComponent} from './newsletter-create/newsletter-create.component';
import {NewsletterEditComponent} from './newsletter-edit/newsletter-edit.component';
import {NewslettersComponentsModule} from '../components/newsletters-components.module';
import {TranslateModule} from '@ngx-translate/core';
import {FreeFormNewslettersComponent} from './free-form-newsletters/free-form-newsletters.component';

@NgModule({
    declarations: [
        NewslettersHomeComponent,
        NewsletterCreateComponent,
        NewsletterEditComponent,
        FreeFormNewslettersComponent
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
        FreeFormNewslettersComponent
    ]
})
export class NewslettersPagesModule {
}
