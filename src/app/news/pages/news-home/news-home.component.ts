import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {ActivatedRoute, Route} from '@angular/router';
import {News} from '../../core/models/news';

@Component({
    selector: 'app-news-home',
    templateUrl: './news-home.component.html',
    styleUrls: ['./news-home.component.css']
})
export class NewsHomeComponent implements OnInit {
    news: News[] = [];

    constructor(private translateService: TranslateService, private activatedRoute: ActivatedRoute) {
        this.listenToResolver();
    }

    ngOnInit(): void {
        this.translateService.use('hr')
    }

    private listenToResolver() {
        this.activatedRoute.data.subscribe((response) => {
            this.news = response['news'].map((x: News) =>
                Object.assign(new News(), x)
            );

            console.log(this.news.length);
        });
    }
}
