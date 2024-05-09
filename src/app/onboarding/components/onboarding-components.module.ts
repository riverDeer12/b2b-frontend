import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OnboardingDataTableComponent} from "./onboarding-data-table/onboarding-data-table.component";
import {OnboardingDetailsComponent} from "./onboarding-details/onboarding-details.component";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {TableModule} from "primeng/table";
import {InputTextModule} from "primeng/inputtext";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
    declarations: [
        OnboardingDataTableComponent,
        OnboardingDetailsComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        ButtonModule,
        RippleModule,
        TableModule,
        InputTextModule,
        ConfirmDialogModule
    ],
    exports: [
        OnboardingDataTableComponent,
        OnboardingDetailsComponent
    ]
})
export class OnboardingComponentsModule {
}
