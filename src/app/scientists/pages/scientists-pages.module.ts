import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScientistsHomeComponent} from './scientists-home/scientists-home.component';
import {ScientistsComponentsModule} from '../components/scientists-components.module';
import {ScientistCreateComponent} from './scientist-create/scientist-create.component';
import {ScientistEditComponent} from './scientist-edit/scientist-edit.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {SharedModule} from '../../shared/shared.module';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {DialogService} from "primeng/dynamicdialog";

/**
 * Translation resources loader.
 *
 * @param http client for loading translations.
 */
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/scientists/', '.json');
}

@NgModule({
    declarations: [
        ScientistsHomeComponent,
        ScientistCreateComponent,
        ScientistEditComponent
    ],
    imports: [
        CommonModule,
        ScientistsComponentsModule,
        TranslateModule.forChild({
            defaultLanguage: 'hr',
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            },
            isolate: true
        }),
        SharedModule
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
