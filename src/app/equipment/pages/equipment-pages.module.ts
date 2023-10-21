import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EquipmentHomeComponent} from './equipment-home/equipment-home.component';
import {EquipmentCreateComponent} from './equipment-create/equipment-create.component';
import {EquipmentEditComponent} from './equipment-edit/equipment-edit.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {EquipmentComponentsModule} from '../components/equipment-components.module';


@NgModule({
    declarations: [
        EquipmentHomeComponent,
        EquipmentCreateComponent,
        EquipmentEditComponent
    ],
    imports: [
        CommonModule,
        EquipmentComponentsModule,
        TranslateModule
    ],
    exports: [
        EquipmentHomeComponent,
        EquipmentCreateComponent,
        EquipmentEditComponent
    ]
})
export class EquipmentPagesModule {
}
