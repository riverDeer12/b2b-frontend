import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResearchProblemsPagesModule} from "./pages/research-problems-pages.module";
import {ResearchProblemsRoutes} from "./research-problems.routing";
import {RouterModule} from "@angular/router";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {ResearchProblemsComponent} from "./research-problems.component";
import {SharedModule} from "../shared/shared.module";

/**
 * Translation resources loader.
 *
 * @param http client for loading translations.
 */
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/research-problems/', '.json');
}

@NgModule({
    declarations: [ResearchProblemsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(ResearchProblemsRoutes),
        TranslateModule.forChild({
            defaultLanguage: 'hr',
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            },
            isolate: true
        }),
        ResearchProblemsPagesModule,
        SharedModule
    ]
})
export class ResearchProblemsModule {
}
