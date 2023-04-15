import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {EquipmentRoutes} from "./equipment.routing";
import {HttpBackend} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {EquipmentComponent} from "./equipment.component";
import {EquipmentPagesModule} from "./pages/equipment-pages.module";
import {MultiTranslateHttpLoader} from 'ngx-translate-multi-http-loader';

/**
 * Translation resources loader.
 *
 * @param http client for loading translations.
 */
export function createTranslateLoader(http: HttpBackend) {
    return new MultiTranslateHttpLoader(http, [
        './assets/i18n/equipment/',
        './assets/i18n/shared/'
    ]);
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
                deps: [HttpBackend]
            },
            isolate: true
        })
    ]
})
export class EquipmentModule {
}
