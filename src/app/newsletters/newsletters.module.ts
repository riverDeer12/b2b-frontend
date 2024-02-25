import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewslettersComponent} from "./newsletters.component";
import {RouterModule} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {SharedModule} from "../shared/shared.module";
import {ConfirmationService} from "primeng/api";
import {NewslettersRoutes} from "./newsletters.routing";
import {NewslettersPagesModule} from "./pages/newsletters-pages.module";

@NgModule({
    declarations: [NewslettersComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(NewslettersRoutes),
        NewslettersPagesModule,
        TranslateModule,
        SharedModule
    ],
    providers: [
        ConfirmationService
    ]
})
export class NewslettersModule {
}
