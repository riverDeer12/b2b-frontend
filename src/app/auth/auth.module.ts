import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthPagesModule} from './pages/auth-pages.module';
import {AuthRoutes} from './auth.routing';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        AuthPagesModule,
        RouterModule.forChild(AuthRoutes)
    ]
})
export class AuthModule {
}
