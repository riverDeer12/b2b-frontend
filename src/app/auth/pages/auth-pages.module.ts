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
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {ForbiddenComponent} from './forbidden/forbidden.component';
import {ErrorComponent} from './error/error.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {RadioButtonModule} from 'primeng/radiobutton';

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
        TranslateModule,
        FormsModule,
        ReactiveFormsModule,
        PasswordModule,
        CheckboxModule,
        ButtonModule,
        RippleModule,
        InputTextModule,
        ToastModule,
        RadioButtonModule
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
