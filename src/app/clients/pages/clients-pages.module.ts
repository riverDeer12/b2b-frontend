import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClientsHomeComponent} from './clients-home/clients-home.component';
import {ClientsComponentsModule} from "../components/clients-components.module";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
    declarations: [
        ClientsHomeComponent
    ],
    imports: [
        CommonModule,
        ClientsComponentsModule,
        TranslateModule
    ],
    exports: [
        ClientsHomeComponent
    ]
})
export class ClientsPagesModule {
}
