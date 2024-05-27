import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutes} from './app.routing';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {DefaultInterceptor} from './shared/interceptors/default.interceptor';
import {DialogService} from "primeng/dynamicdialog";

/**
 * Translations loader.
 *
 * @param http client for loading translations.
 */
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forRoot(AppRoutes, {
            scrollPositionRestoration: 'top'
        }),
        TranslateModule.forRoot({
            defaultLanguage: 'HR',
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            },
            isolate: false
        }),
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ToastModule
    ],
    providers: [
        MessageService,
        DialogService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: DefaultInterceptor,
            multi: true,
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
