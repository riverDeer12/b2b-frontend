import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SubscribersHomeComponent} from './subscribers-home/subscribers-home.component';
import {SubscriberCreateComponent} from './subscriber-create/subscriber-create.component';
import {SubscriberEditComponent} from './subscriber-edit/subscriber-edit.component';
import {SubscribersComponentsModule} from '../components/subscribers-components.module';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '../../shared/shared.module';

/**
 * Translation resources loader.
 *
 * @param http client for loading translations.
 */
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/subscribers/', '.json');
}

@NgModule({
    declarations: [
        SubscribersHomeComponent,
        SubscriberCreateComponent,
        SubscriberEditComponent
    ],
    imports: [
        CommonModule,
        TranslateModule.forChild({
            defaultLanguage: 'hr',
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            },
            isolate: true
        }),
        SharedModule,
        SubscribersComponentsModule
    ],
    exports: [
        SubscribersHomeComponent,
        SubscriberCreateComponent,
        SubscriberEditComponent
    ]
})
export class SubscribersPagesModule {
}
