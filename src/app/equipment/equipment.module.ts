import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {EquipmentRoutes} from "./equipment.routing";
import {TranslateModule} from "@ngx-translate/core";
import {EquipmentComponent} from "./equipment.component";
import {EquipmentPagesModule} from "./pages/equipment-pages.module";
import {ConfirmationService} from 'primeng/api';

@NgModule({
    declarations: [EquipmentComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(EquipmentRoutes),
        EquipmentPagesModule,
        TranslateModule
    ],
    providers: [ConfirmationService]
})
export class EquipmentModule {
}
