import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersPagesModule} from './pages/users-pages.module';
import {RouterModule} from '@angular/router';
import {UsersRoutes} from './users.routing';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {UsersComponent} from './users.component';
import {SharedModule} from '../shared/shared.module';

/**
 * Translation resources loader.
 *
 * @param http client for loading translations.
 */
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/users/', '.json');
}
@NgModule({
    declarations: [
    UsersComponent
  ],
    imports: [
        CommonModule,
        UsersPagesModule,
        RouterModule.forChild(UsersRoutes),
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
    ]
})
export class UsersModule {
}
