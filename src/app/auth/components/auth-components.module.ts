import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginFormComponent} from './login-form/login-form.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {ChangeUsernameComponent} from './change-username/change-username.component';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {RippleModule} from 'primeng/ripple';
import { CredentialsFormComponent } from './credentials-form/credentials-form.component';

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
        LoginFormComponent,
        ChangePasswordComponent,
        ChangeUsernameComponent,
        CredentialsFormComponent
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
        PasswordModule,
        ButtonModule,
        ReactiveFormsModule,
        InputTextModule,
        RippleModule,
        FormsModule
    ],
    exports: [
        LoginFormComponent,
        ChangePasswordComponent,
        ChangeUsernameComponent,
        CredentialsFormComponent
    ]
})
export class AuthComponentsModule {
}
