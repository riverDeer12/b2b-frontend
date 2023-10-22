import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScientistsDataTableComponent} from './scientists-data-table/scientists-data-table.component';
import { ScientistFormComponent } from './scientist-form/scientist-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {InputTextModule} from 'primeng/inputtext';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {SharedModule} from '../../shared/shared.module';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {ConfirmationService} from 'primeng/api';
import {TabViewModule} from "primeng/tabview";
import {ScientistGeneralFormComponent} from "./scientist-general-form/scientist-general-form.component";
import {AuthComponentsModule} from "../../auth/components/auth-components.module";
import {EquipmentComponentsModule} from "../../equipment/components/equipment-components.module";
import {SpecificKnowledgeComponentsModule} from "../../specific-knowledge/components/specific-knowledge-components.module";
import {CategoriesComponentsModule} from "../../categories/components/categories-components.module";
import {ChipsModule} from 'primeng/chips';
import {CustomControlsModule} from '../../custom-controls/custom-controls.module';

@NgModule({
    declarations: [
        ScientistsDataTableComponent,
        ScientistFormComponent,
        ScientistGeneralFormComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        SharedModule,
        TableModule,
        ButtonModule,
        RippleModule,
        ReactiveFormsModule,
        InputTextModule,
        ConfirmDialogModule,
        TabViewModule,
        AuthComponentsModule,
        EquipmentComponentsModule,
        SpecificKnowledgeComponentsModule,
        CategoriesComponentsModule,
        ChipsModule,
        CustomControlsModule
    ],
    providers:[
        ConfirmationService
    ],
    exports: [
        ScientistsDataTableComponent,
        ScientistFormComponent,
        ScientistGeneralFormComponent
    ]
})
export class ScientistsComponentsModule {
}
