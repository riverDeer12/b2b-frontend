import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthPagesModule} from './pages/auth-pages.module';
import {AuthRoutes} from './auth.routing';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';

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
