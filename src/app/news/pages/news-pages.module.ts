import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsHomeComponent} from './news-home/news-home.component';
import {NewsCreateComponent} from './news-create/news-create.component';
import {NewsEditComponent} from './news-edit/news-edit.component';
import {NewsComponentsModule} from '../components/news-components.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    declarations: [
        NewsHomeComponent,
        NewsCreateComponent,
        NewsEditComponent
    ],
    imports: [
        CommonModule,
        NewsComponentsModule,
        TranslateModule
    ],
    exports: [
        NewsHomeComponent,
        NewsCreateComponent,
        NewsEditComponent
    ]
})
export class NewsPagesModule {
}
