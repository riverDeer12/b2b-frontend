import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScientistsHomeComponent} from './scientists-home/scientists-home.component';
import {ScientistsComponentsModule} from '../components/scientists-components.module';
import {ScientistCreateComponent} from './scientist-create/scientist-create.component';
import {ScientistEditComponent} from './scientist-edit/scientist-edit.component';
import {TranslateModule} from '@ngx-translate/core';
import {DialogService} from "primeng/dynamicdialog";

@NgModule({
    declarations: [
        ScientistsHomeComponent,
        ScientistCreateComponent,
        ScientistEditComponent
    ],
    imports: [
        CommonModule,
        ScientistsComponentsModule,
        TranslateModule
    ],
    providers: [
        DialogService
    ],
    exports: [
        ScientistsHomeComponent,
        ScientistCreateComponent,
        ScientistEditComponent
    ]
})
export class ScientistsPagesModule {
}
