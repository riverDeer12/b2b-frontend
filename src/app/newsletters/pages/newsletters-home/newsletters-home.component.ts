import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route} from '@angular/router';
import {NewsletterAdditionalContent} from '../../core/models/newsletter-additional-content';

@Component({
    selector: 'newsletters-home',
    templateUrl: './newsletters-home.component.html',
    styleUrls: ['./newsletters-home.component.css']
})
export class NewslettersHomeComponent implements OnInit {
    newsletters!: NewsletterAdditionalContent[];

    constructor(private activatedRoute: ActivatedRoute) {
        this.listenToResolver();
    }

    ngOnInit(): void {
    }

    private listenToResolver() {
        this.activatedRoute.data.subscribe((response) => {
            this.newsletters = response['newsletters'].map((x: NewsletterAdditionalContent) =>
                Object.assign(new NewsletterAdditionalContent(), x)
            );
        });
    }
}
