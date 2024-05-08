import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OnboardingDataTableComponent} from "./onboarding-data-table/onboarding-data-table.component";
import {OnboardingDetailsComponent} from "./onboarding-details/onboarding-details.component";


@NgModule({
    declarations: [
        OnboardingDataTableComponent,
        OnboardingDetailsComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        OnboardingDataTableComponent,
        OnboardingDetailsComponent
    ]
})
export class OnboardingComponentsModule {
}
