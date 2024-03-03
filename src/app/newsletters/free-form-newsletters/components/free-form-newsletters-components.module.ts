import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableModule} from 'primeng/table';
import {TranslateModule} from '@ngx-translate/core';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {ConfirmationService} from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {EditorModule} from "primeng/editor";
import {ReactiveFormsModule} from "@angular/forms";
import {TabViewModule} from "primeng/tabview";
import {ValidationService} from "../../../shared/services/validation.service";
import {CustomControlsModule} from "../../../custom-controls/custom-controls.module";


@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        TableModule,
        TranslateModule,
        InputTextModule,
        ButtonModule,
        RippleModule,
        ConfirmDialogModule,
        EditorModule,
        ReactiveFormsModule,
        TabViewModule,
        CustomControlsModule
    ],
    providers: [
        ConfirmationService,
        ValidationService
    ],
    exports: [
    ]
})
export class FreeFormNewslettersComponentsModule {
}
