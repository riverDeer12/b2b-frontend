import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginAdminComponent} from './login-admin/login-admin.component';
import {LoginUserComponent} from './login-user/login-user.component';
import {AuthComponentsModule} from '../components/auth-components.module';
import {PasswordModule} from 'primeng/password';
import {CheckboxModule} from 'primeng/checkbox';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {ForbiddenComponent} from './forbidden/forbidden.component';
import {ErrorComponent} from './error/error.component';
import { NotFoundComponent } from './not-found/not-found.component';

/**
 * Translation resources loader.
 *
 * @param http client for loading translations.
 */
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/auth/', '.json');
}

@NgModule({
    declarations: [
        LoginAdminComponent,
        LoginUserComponent,
        ForbiddenComponent,
        ErrorComponent,
        NotFoundComponent
    ],
    imports: [
        CommonModule,
        AuthComponentsModule,
        RouterModule,
        TranslateModule.forChild({
            defaultLanguage: 'hr',
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            },
            isolate: true
        }),
        FormsModule,
        ReactiveFormsModule,
        PasswordModule,
        CheckboxModule,
        ButtonModule,
        RippleModule,
        InputTextModule,
        ToastModule
    ],
    exports: [
        LoginAdminComponent,
        LoginUserComponent,
        ForbiddenComponent,
        ErrorComponent,
        NotFoundComponent
    ]
})
export class AuthPagesModule {
}
