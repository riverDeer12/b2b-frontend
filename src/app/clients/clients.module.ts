import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClientsComponent} from "./clients.component";
import {RouterModule} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {SharedModule} from "../shared/shared.module";
import {ClientsRoutes} from "./clients.routing";
import {ClientsPagesModule} from "./pages/clients-pages.module";


@NgModule({
    declarations: [ClientsComponent],
    imports: [
        CommonModule,
        ClientsPagesModule,
        RouterModule.forChild(ClientsRoutes),
        TranslateModule,
        SharedModule
    ]
})
export class ClientsModule {
}
