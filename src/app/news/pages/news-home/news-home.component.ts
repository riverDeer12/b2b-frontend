import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-news-home',
    templateUrl: './news-home.component.html',
    styleUrls: ['./news-home.component.css']
})
export class NewsHomeComponent implements OnInit {

    constructor(private translateService: TranslateService) {
    }

    ngOnInit(): void {
        this.translateService.use('hr')
    }
}
