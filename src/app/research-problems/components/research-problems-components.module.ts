import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    ResearchProblemsDataTableComponent
} from './research-problems-data-table/research-problems-data-table.component';
import {ResearchProblemFormComponent} from './research-problems-form/research-problem-form.component';
import {TableModule} from "primeng/table";
import {InputTextModule} from "primeng/inputtext";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {RippleModule} from "primeng/ripple";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {CategoriesComponentsModule} from "../../categories/components/categories-components.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RadioButtonModule} from "primeng/radiobutton";
import {DialogService} from 'primeng/dynamicdialog';

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
        ResearchProblemFormComponent
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
        RippleModule,
        CategoriesComponentsModule,
        ReactiveFormsModule,
        RadioButtonModule,
        FormsModule
    ],
    providers: [
        DialogService
    ],
    exports: [
        ResearchProblemsDataTableComponent,
        ResearchProblemFormComponent
    ]
})
export class ResearchProblemsComponentsModule {
}
