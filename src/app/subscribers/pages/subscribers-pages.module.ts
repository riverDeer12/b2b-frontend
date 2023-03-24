import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SubscribersHomeComponent} from './subscribers-home/subscribers-home.component';
import {SubscriberCreateComponent} from './subscriber-create/subscriber-create.component';
import {SubscriberEditComponent} from './subscriber-edit/subscriber-edit.component';
import {SubscribersComponentsModule} from '../components/subscribers-components.module';


@NgModule({
    declarations: [
        SubscribersHomeComponent,
        SubscriberCreateComponent,
        SubscriberEditComponent
    ],
    imports: [
        CommonModule,
        SubscribersComponentsModule
    ],
    exports: [
        SubscribersHomeComponent,
        SubscriberCreateComponent,
        SubscriberEditComponent
    ]
})
export class SubscribersPagesModule {
}
