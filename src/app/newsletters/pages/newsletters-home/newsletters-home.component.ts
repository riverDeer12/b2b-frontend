import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {ActivatedRoute, Route} from '@angular/router';
import {Newsletter} from '../../core/models/newsletter';

@Component({
    selector: 'newsletters-home',
    templateUrl: './newsletters-home.component.html',
    styleUrls: ['./newsletters-home.component.css']
})
export class NewslettersHomeComponent implements OnInit {
    newsletters!: Newsletter[];

    constructor(private translateService: TranslateService, private activatedRoute: ActivatedRoute) {
        this.listenToResolver();
    }

    ngOnInit(): void {
    }

    private listenToResolver() {
        this.activatedRoute.data.subscribe((response) => {
            this.newsletters = response['newsletters'].map((x: Newsletter) =>
                Object.assign(new Newsletter(), x)
            );
        });
    }
}
