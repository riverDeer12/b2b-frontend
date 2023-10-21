import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpecificKnowledgePagesModule} from "./pages/specific-knowledge-pages.module";
import {RouterModule} from "@angular/router";
import {SpecificKnowledgeRoutes} from "./specific-knowledge.routing";
import {TranslateModule} from "@ngx-translate/core";
import {SpecificKnowledgeComponent} from "./specific-knowledge.component";

@NgModule({
    declarations: [SpecificKnowledgeComponent],
    imports: [
        CommonModule,
        SpecificKnowledgePagesModule,
        RouterModule.forChild(SpecificKnowledgeRoutes),
        TranslateModule
    ]
})
export class SpecificKnowledgeModule {
}
