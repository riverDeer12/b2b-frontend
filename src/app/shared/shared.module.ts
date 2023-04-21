import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotificationService} from './services/notification.service';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {DropdownModule} from 'primeng/dropdown';
import {DialogFormComponent} from './components/dialog-form/dialog-form.component';
import {ResearchProblemsComponentsModule} from '../research-problems/components/research-problems-components.module';
import {ButtonModule} from 'primeng/button';
import {JobOffersComponentsModule} from '../job-offers/components/job-offers-components.module';
import {EquipmentComponentsModule} from '../equipment/components/equipment-components.module';
import {SpecificKnowledgeComponentsModule} from '../specific-knowledge/components/specific-knowledge-components.module';

@NgModule({
    declarations: [
        DialogFormComponent
    ],
    imports: [
        CommonModule,
        AutoCompleteModule,
        ReactiveFormsModule,
        TranslateModule,
        DropdownModule,
        ResearchProblemsComponentsModule,
        ButtonModule,
        JobOffersComponentsModule,
        EquipmentComponentsModule,
        SpecificKnowledgeComponentsModule
    ],
    providers: [
        NotificationService
    ]
})
export class SharedModule {
}
