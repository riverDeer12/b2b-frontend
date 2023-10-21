import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResearchProblemsPagesModule} from "./pages/research-problems-pages.module";
import {ResearchProblemsRoutes} from "./research-problems.routing";
import {RouterModule} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {ResearchProblemsComponent} from "./research-problems.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    declarations: [ResearchProblemsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(ResearchProblemsRoutes),
        TranslateModule,
        ResearchProblemsPagesModule,
        SharedModule
    ]
})
export class ResearchProblemsModule {
}
