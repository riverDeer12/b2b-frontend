import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotificationService} from './services/notification.service';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import {ActivityComponent} from './components/activity/activity.component';
import {CheckboxModule} from 'primeng/checkbox';
import {ValidationService} from './services/validation.service';
import {FileUploadModule} from 'primeng/fileupload';
import {DialogFormComponent} from './components/dialog-form/dialog-form.component';
import {JobOffersComponentsModule} from '../job-offers/components/job-offers-components.module';
import {EquipmentComponentsModule} from '../equipment/components/equipment-components.module';
import {ResearchProblemsComponentsModule} from '../research-problems/components/research-problems-components.module';
import {SpecificKnowledgeComponentsModule} from '../specific-knowledge/components/specific-knowledge-components.module';

@NgModule({
    declarations: [
        ActivityComponent,
        DialogFormComponent
    ],
    imports: [
        CommonModule,
        AutoCompleteModule,
        ReactiveFormsModule,
        TranslateModule,
        DropdownModule,
        ButtonModule,
        CheckboxModule,
        FileUploadModule,
        JobOffersComponentsModule,
        EquipmentComponentsModule,
        ResearchProblemsComponentsModule,
        SpecificKnowledgeComponentsModule
    ],
    exports: [
        ActivityComponent,
        DialogFormComponent
    ],
    providers: [
        NotificationService,
        ValidationService
    ]
})
export class SharedModule {
}
