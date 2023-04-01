import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResearchProblemsComponentsModule} from "../components/research-problems-components.module";
import {ResearchProblemsHomeComponent} from './research-problems-home/research-problems-home.component';
import {ResearchProblemCreateComponent} from "./research-problem-create/research-problem-create.component";
import {ResearchProblemEditComponent} from "./research-problem-edit/research-problem-edit.component";
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";

/**
 * Translation resources loader.
 *
 * @param http client for loading translations.
 */
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/research-problems/', '.json');
}


@NgModule({
    declarations: [
        ResearchProblemsHomeComponent,
        ResearchProblemCreateComponent,
        ResearchProblemEditComponent
    ],
    imports: [
        CommonModule,
        ResearchProblemsComponentsModule,
        TranslateModule.forChild({
            defaultLanguage: 'hr',
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            },
            isolate: true
        })
    ],
    exports: [
        ResearchProblemsHomeComponent,
        ResearchProblemCreateComponent,
        ResearchProblemEditComponent
    ]
})
export class ResearchProblemsPagesModule {
}
