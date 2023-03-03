import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NewsRoutes} from './news.routing';
import {NewsPagesModule} from './pages/news-pages.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(NewsRoutes),
        NewsPagesModule
    ]
})
export class NewsModule {
}
