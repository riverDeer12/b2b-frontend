import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {OnboardingRoutes} from "./onboarding.routing";
import {OnboardingComponent} from './onboarding.component';
import {TranslateModule} from "@ngx-translate/core";
import {OnboardingPagesModule} from "./pages/onboarding-pages.module";


@NgModule({
    declarations: [
        OnboardingComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(OnboardingRoutes),
        TranslateModule,
        OnboardingPagesModule
    ]
})
export class OnboardingModule {
}
