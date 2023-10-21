import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NewsRoutes} from './news.routing';
import {NewsPagesModule} from './pages/news-pages.module';
import {NewsComponent} from './news.component';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    declarations: [
        NewsComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(NewsRoutes),
        NewsPagesModule,
        TranslateModule,
        SharedModule
    ]
})
export class NewsModule {
}
