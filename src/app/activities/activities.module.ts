import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivitiesPagesModule} from './pages/activities-pages.module';
import {RouterModule} from '@angular/router';
import {ActivitiesRoutes} from './activities.routing';
import {ActivitiesComponent} from './activities.component';
import {HttpBackend} from '@angular/common/http';
import {MultiTranslateHttpLoader} from 'ngx-translate-multi-http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';


export function createTranslateLoader(http: HttpBackend) {
    return new MultiTranslateHttpLoader(http, [
        './assets/i18n/activities/',
        './assets/i18n/shared/'
    ]);
}

@NgModule({
    declarations: [
        ActivitiesComponent
    ],
    imports: [
        CommonModule,
        ActivitiesPagesModule,
        RouterModule.forChild(ActivitiesRoutes),
        TranslateModule.forChild({
            defaultLanguage: 'hr',
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpBackend]
            },
            isolate: true
        })
    ]
})
export class ActivitiesModule {
}
