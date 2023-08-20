import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PublicLayoutComponent} from './public-layout.component';
import {RouterModule} from '@angular/router';
import {PublicLayoutRoutes} from './public-layout.routing';
import {HttpBackend} from '@angular/common/http';
import {MultiTranslateHttpLoader} from 'ngx-translate-multi-http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import {RippleModule} from 'primeng/ripple';
import {ButtonModule} from 'primeng/button';
import {LandingComponent} from './pages/landing/landing.component';
import {StyleClassModule} from 'primeng/styleclass';
import {DividerModule} from 'primeng/divider';


/**
 * Translation resources loader.
 *
 * @param http client for loading translations.
 */
export function createTranslateLoader(http: HttpBackend) {
    return new MultiTranslateHttpLoader(http, [
        './assets/i18n/layouts/public/',
        './assets/i18n/shared/'
    ]);
}

@NgModule({
    declarations: [
        PublicLayoutComponent,
        LandingComponent,
        NavbarComponent
    ],
    exports: [
        NavbarComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(PublicLayoutRoutes),
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpBackend]
            },
            isolate: true
        }),
        RippleModule,
        ButtonModule,
        StyleClassModule,
        DividerModule
    ]
})
export class PublicLayoutModule {
}
