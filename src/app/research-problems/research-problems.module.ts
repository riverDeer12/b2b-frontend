import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResearchProblemsPagesModule} from "./pages/research-problems-pages.module";
import {ResearchProblemsRoutes} from "./research-problems.routing";
import {RouterModule} from "@angular/router";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpBackend} from '@angular/common/http';
import {ResearchProblemsComponent} from "./research-problems.component";
import {SharedModule} from "../shared/shared.module";
import {MultiTranslateHttpLoader} from 'ngx-translate-multi-http-loader';

/**
 * Translation resources loader.
 *
 * @param http client for loading translations.
 */
export function createTranslateLoader(http: HttpBackend) {
    return new MultiTranslateHttpLoader(http, [
        './assets/i18n/research-problems/',
        './assets/i18n/shared/'
    ]);
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
                deps: [HttpBackend]
            },
            isolate: true
        }),
        ResearchProblemsPagesModule,
        SharedModule
    ]
})
export class ResearchProblemsModule {
}
