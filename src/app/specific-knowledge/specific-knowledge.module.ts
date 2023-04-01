import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpecificKnowledgePagesModule} from "./pages/specific-knowledge-pages.module";
import {RouterModule} from "@angular/router";
import {SpecificKnowledgeRoutes} from "./specific-knowledge.routing";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {SpecificKnowledgeComponent} from "./specific-knowledge.component";

/**
 * Translation resources loader.
 *
 * @param http client for loading translations.
 */
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/specific-knowledge/', '.json');
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
                deps: [HttpClient]
            },
            isolate: true
        })
    ]
})
export class SpecificKnowledgeModule {
}
