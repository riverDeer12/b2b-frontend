import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginFormComponent} from './login-form/login-form.component';
import {TranslateModule} from '@ngx-translate/core';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {ChangeUsernameComponent} from './change-username/change-username.component';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {RippleModule} from 'primeng/ripple';
import {CredentialsFormComponent} from './credentials-form/credentials-form.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';

@NgModule({
    declarations: [
        LoginFormComponent,
        ChangePasswordComponent,
        ChangeUsernameComponent,
        CredentialsFormComponent,
        ForgotPasswordComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
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
        CredentialsFormComponent,
        ForgotPasswordComponent
    ]
})
export class AuthComponentsModule {
}
