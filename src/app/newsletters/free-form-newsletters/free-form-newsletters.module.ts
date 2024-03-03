import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FreeFormNewslettersComponent} from "./free-form-newsletters.component";
import {RouterModule} from "@angular/router";
import {FreeFormNewslettersRoutes} from "./free-form-newsletters.routing";
import {FreeFormNewslettersPagesModule} from "./pages/free-form-newsletters-pages.module";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    declarations: [FreeFormNewslettersComponent],
    imports: [
        CommonModule,
        FreeFormNewslettersPagesModule,
        RouterModule.forChild(FreeFormNewslettersRoutes),
        TranslateModule
    ]
})
export class FreeFormNewslettersModule {
}
