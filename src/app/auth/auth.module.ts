import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthPagesModule} from './pages/auth-pages.module';
import {AuthRoutes} from './auth.routing';
import {RouterModule} from '@angular/router';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpBackend} from '@angular/common/http';
import {MultiTranslateHttpLoader} from 'ngx-translate-multi-http-loader';

@NgModule({
    imports: [
        CommonModule,
        AuthPagesModule,
        RouterModule.forChild(AuthRoutes),
        TranslateModule
    ]
})
export class AuthModule {
}
