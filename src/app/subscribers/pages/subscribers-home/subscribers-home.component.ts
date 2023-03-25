import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {ActivatedRoute} from '@angular/router';
import {Subscriber} from '../../core/models/subscriber';

@Component({
    selector: 'subscribers-home',
    templateUrl: './subscribers-home.component.html',
    styleUrls: ['./subscribers-home.component.css']
})
export class SubscribersHomeComponent implements OnInit {

    subscribers: Subscriber[] = [];

    constructor(private translateService: TranslateService, private activatedRoute: ActivatedRoute) {
        this.listenToResolver();
    }

    ngOnInit(): void {
    }

    private listenToResolver() {
        this.activatedRoute.data.subscribe((response) => {
            this.subscribers = response['subscribers'].map((x: Subscriber) =>
                Object.assign(new Subscriber(), x)
            );
        });
    }

}
