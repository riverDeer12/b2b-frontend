import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpecificKnowledgePagesModule} from "./pages/specific-knowledge-pages.module";
import {RouterModule} from "@angular/router";
import {SpecificKnowledgeRoutes} from "./specific-knowledge.routing";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpBackend} from '@angular/common/http';
import {SpecificKnowledgeComponent} from "./specific-knowledge.component";
import {MultiTranslateHttpLoader} from 'ngx-translate-multi-http-loader';

/**
 * Translation resources loader.
 *
 * @param http client for loading translations.
 */
export function createTranslateLoader(http: HttpBackend) {
    return new MultiTranslateHttpLoader(http, [
        './assets/i18n/specific-knowledge/',
        './assets/i18n/shared/'
    ]);
}

@NgModule({
    declarations: [SpecificKnowledgeComponent],
    imports: [
        CommonModule,
        SpecificKnowledgePagesModule,
        RouterModule.forChild(SpecificKnowledgeRoutes),
        TranslateModule.forChild({
            defaultLanguage: 'hr',
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpBackend]
            },
            isolate: true
        })
    ]
})
export class SpecificKnowledgeModule {
}
