import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SubscribersPagesModule} from './pages/subscribers-pages.module';
import {RouterModule} from '@angular/router';
import {SubscribersRoutes} from './subscribers.routing';
import {TranslateModule} from '@ngx-translate/core';
import {SubscribersComponent} from './subscribers.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    declarations: [
    SubscribersComponent
  ],
    imports: [
        CommonModule,
        SubscribersPagesModule,
        RouterModule.forChild(SubscribersRoutes),
        TranslateModule,
        SharedModule
    ]
})
export class SubscribersModule {
}
