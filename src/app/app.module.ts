import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutes} from './app.routing';
import {NotfoundComponent} from './demo/components/notfound/notfound.component';
import {ProductService} from './demo/service/product.service';
import {CountryService} from './demo/service/country.service';
import {CustomerService} from './demo/service/customer.service';
import {EventService} from './demo/service/event.service';
import {IconService} from './demo/service/icon.service';
import {NodeService} from './demo/service/node.service';
import {PhotoService} from './demo/service/photo.service';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {MessagesModule} from 'primeng/messages';
import {MessageService} from 'primeng/api';
import {MessageModule} from 'primeng/message';
import {ToastModule} from 'primeng/toast';

/**
 * Translations loader.
 *
 * @param http client for loading translations.
 */
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/app/', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
        NotfoundComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        TranslateModule.forRoot({
            defaultLanguage: 'hr',
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            },
            extend: true
        }),
        RouterModule.forRoot(AppRoutes, {
            scrollPositionRestoration: 'enabled',
            anchorScrolling: 'enabled',
            onSameUrlNavigation: 'reload'
        }),
        ToastModule
    ],
    providers: [
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
