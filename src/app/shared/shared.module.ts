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
import {DialogService} from 'primeng/dynamicdialog';
import { SendMessageFormComponent } from './components/send-message-form/send-message-form.component';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';

@NgModule({
    declarations: [
        ActivityComponent,
        DialogFormComponent,
        SendMessageFormComponent,
        LanguageSelectorComponent
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
        DialogFormComponent,
        SendMessageFormComponent
    ],
    providers: [
        NotificationService,
        DialogService,
        ValidationService
    ]
})
export class SharedModule {
}
