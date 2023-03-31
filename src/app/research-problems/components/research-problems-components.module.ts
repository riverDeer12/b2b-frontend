import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    ResearchProblemsDataTableComponent
} from './research-problems-data-table/research-problems-data-table.component';
import {ResearchProblemsFormComponent} from './research-problems-form/research-problems-form.component';
import {TableModule} from "primeng/table";
import {InputTextModule} from "primeng/inputtext";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {RippleModule} from "primeng/ripple";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

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
        ResearchProblemsDataTableComponent,
        ResearchProblemsFormComponent
    ],
    imports: [
        CommonModule,
        TranslateModule.forChild({
            defaultLanguage: 'hr',
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            },
            isolate: true
        }),
        TableModule,
        InputTextModule,
        ConfirmDialogModule,
        RippleModule
    ],
    exports: [
        ResearchProblemsDataTableComponent,
        ResearchProblemsFormComponent
    ]
})
export class ResearchProblemsComponentsModule {
}
