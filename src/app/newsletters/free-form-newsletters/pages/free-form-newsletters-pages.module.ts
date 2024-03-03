import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {FreeFormNewslettersComponent} from "../free-form-newsletters.component";
import {FreeFormNewslettersComponentsModule} from "../components/free-form-newsletters-components.module";

@NgModule({
    declarations: [
        FreeFormNewslettersComponent
    ],
    imports: [
        CommonModule,
        FreeFormNewslettersComponentsModule,
        TranslateModule
    ],
    exports: [
    ]
})
export class FreeFormNewslettersPagesModule {
}
