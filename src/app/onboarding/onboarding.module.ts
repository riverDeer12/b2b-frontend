import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {OnboardingRoutes} from "./onboarding.routing";
import {OnboardingHomeComponent} from './pages/onboarding-home/onboarding-home.component';
import {OnboardingComponent} from './onboarding.component';
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
    declarations: [
        OnboardingHomeComponent,
        OnboardingComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(OnboardingRoutes),
        TranslateModule
    ]
})
export class OnboardingModule {
}
