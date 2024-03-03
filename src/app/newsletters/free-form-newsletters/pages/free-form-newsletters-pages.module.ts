import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {FreeFormNewslettersComponentsModule} from "../components/free-form-newsletters-components.module";
import {FreeFormNewslettersHomeComponent} from './free-form-newsletters-home/free-form-newsletters-home.component';
import {FreeFormNewsletterEditComponent} from './free-form-newsletter-edit/free-form-newsletter-edit.component';
import {FreeFormNewsletterCreateComponent} from './free-form-newsletter-create/free-form-newsletter-create.component';

@NgModule({
    declarations: [
        FreeFormNewslettersHomeComponent,
        FreeFormNewsletterEditComponent,
        FreeFormNewsletterCreateComponent
    ],
    imports: [
        CommonModule,
        FreeFormNewslettersComponentsModule,
        TranslateModule
    ],
    exports: [
        FreeFormNewslettersHomeComponent,
        FreeFormNewsletterEditComponent,
        FreeFormNewsletterCreateComponent
    ]
})
export class FreeFormNewslettersPagesModule {
}
