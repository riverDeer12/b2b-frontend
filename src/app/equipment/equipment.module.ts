import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {EquipmentRoutes} from "./equipment.routing";
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {EquipmentComponent} from "./equipment.component";
import {EquipmentPagesModule} from "./pages/equipment-pages.module";

/**
 * Translation resources loader.
 *
 * @param http client for loading translations.
 */
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/equipment/', '.json');
}

@NgModule({
    declarations: [EquipmentComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(EquipmentRoutes),
        EquipmentPagesModule,
        TranslateModule.forChild({
            defaultLanguage: 'hr',
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            },
            isolate: true
        })
    ]
})
export class EquipmentModule {
}
