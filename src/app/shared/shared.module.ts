import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotificationService} from './services/notification.service';
import {EntitySelectorComponent} from './components/entity-selector/entity-selector.component';
import {AutoCompleteModule} from "primeng/autocomplete";
import {ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    declarations: [
        EntitySelectorComponent
    ],
    imports: [
        CommonModule,
        AutoCompleteModule,
        ReactiveFormsModule,
        TranslateModule
    ],
    providers: [
        NotificationService
    ],
    exports: [
        EntitySelectorComponent
    ]
})
export class SharedModule {
}
