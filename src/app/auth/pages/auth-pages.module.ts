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
import {MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';


@NgModule({
    declarations: [
        LoginAdminComponent,
        LoginUserComponent
    ],
    imports: [
        CommonModule,
        AuthComponentsModule,
        RouterModule,
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
        LoginUserComponent
    ]
})
export class AuthPagesModule {
}
