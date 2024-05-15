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
import { OnboardingItemsSelectorComponent } from './onboarding-items-selector/onboarding-items-selector.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MultiSelectModule} from "primeng/multiselect";


@NgModule({
    declarations: [
        OnboardingDataTableComponent,
        OnboardingDetailsComponent,
        OnboardingItemsSelectorComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        ButtonModule,
        RippleModule,
        TableModule,
        InputTextModule,
        ConfirmDialogModule,
        ReactiveFormsModule,
        MultiSelectModule
    ],
    exports: [
        OnboardingDataTableComponent,
        OnboardingDetailsComponent,
        OnboardingItemsSelectorComponent
    ]
})
export class OnboardingComponentsModule {
}
