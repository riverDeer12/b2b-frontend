import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClientsDataTableComponent} from './clients-data-table/clients-data-table.component';
import {TableModule} from "primeng/table";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {RippleModule} from "primeng/ripple";
import {InputTextModule} from "primeng/inputtext";
import {TranslateModule} from "@ngx-translate/core";
import { ClientFormComponent } from './client-form/client-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ClipboardModule} from "@angular/cdk/clipboard";
import {CheckboxModule} from "primeng/checkbox";

@NgModule({
    declarations: [
        ClientsDataTableComponent,
        ClientFormComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        TableModule,
        ConfirmDialogModule,
        RippleModule,
        InputTextModule,
        ReactiveFormsModule,
        ClipboardModule,
        CheckboxModule
    ],
    exports: [
        ClientsDataTableComponent,
        ClientFormComponent
    ]
})
export class ClientsComponentsModule {
}
