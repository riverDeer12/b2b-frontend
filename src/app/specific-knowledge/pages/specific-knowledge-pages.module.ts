import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpecificKnowledgeHomeComponent} from './specific-knowledge-home/specific-knowledge-home.component';
import {SpecificKnowledgeCreateComponent} from './specific-knowledge-create/specific-knowledge-create.component';
import {SpecificKnowledgeEditComponent} from './specific-knowledge-edit/specific-knowledge-edit.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {SpecificKnowledgeComponentsModule} from '../components/specific-knowledge-components.module';

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
        SpecificKnowledgeHomeComponent,
        SpecificKnowledgeCreateComponent,
        SpecificKnowledgeEditComponent
    ],
    imports: [
        CommonModule,
        SpecificKnowledgeComponentsModule,
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
        SpecificKnowledgeHomeComponent,
        SpecificKnowledgeCreateComponent,
        SpecificKnowledgeEditComponent
    ]
})
export class SpecificKnowledgePagesModule {
}
