import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OnboardingHomeComponent} from "./onboarding-home/onboarding-home.component";
import {OnboardingComponentsModule} from "../components/onboarding-components.module";
import {OnboardingInfoComponent} from './onboarding-info/onboarding-info.component';


@NgModule({
    declarations: [
        OnboardingHomeComponent,
        OnboardingInfoComponent
    ],
    imports: [
        CommonModule,
        OnboardingComponentsModule
    ],
    exports: [
        OnboardingHomeComponent,
        OnboardingInfoComponent
    ]
})
export class OnboardingPagesModule {
}
