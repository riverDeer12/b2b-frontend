import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpecificKnowledgeFormComponent} from './specific-knowledge-form/specific-knowledge-form.component';
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {ReactiveFormsModule} from "@angular/forms";
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {
    SpecificKnowledgeDataTableComponent
} from './specific-knowledge-data-table/specific-knowledge-data-table.component';
import {TableModule} from 'primeng/table';
import {RippleModule} from 'primeng/ripple';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {MultiSelectModule} from 'primeng/multiselect';
import {RouterModule} from '@angular/router';
import {CategoriesComponentsModule} from "../../categories/components/categories-components.module";


/**
 * Translation resources loader.
 *
 * @param http client for loading translations.
 */
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/specific-knowledge/', '.json');
}

@NgModule({
    declarations: [
        SpecificKnowledgeFormComponent,
        SpecificKnowledgeDataTableComponent,
    ],
    imports: [
        CommonModule,
        InputTextModule,
        ButtonModule,
        RouterModule,
        ReactiveFormsModule,
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
        RippleModule,
        ConfirmDialogModule,
        MultiSelectModule,
        ReactiveFormsModule,
        CategoriesComponentsModule
    ],
    providers: [
        ConfirmationService
    ],
    exports: [
        SpecificKnowledgeFormComponent,
        SpecificKnowledgeDataTableComponent,
    ]
})
export class SpecificKnowledgeComponentsModule {
}
