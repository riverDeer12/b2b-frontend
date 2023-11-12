import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Activity} from '../../core/models/activity';
import {MostPopular} from '../../core/models/most-popular';

@Component({
    selector: 'activities-home-page',
    templateUrl: './activities-home.component.html',
    styleUrls: ['./activities-home.component.css']
})
export class ActivitiesHomeComponent implements OnInit {
    lastActivities!: Activity;
    mostPopular!: MostPopular;

    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.listenToResolver();
    }

    private listenToResolver() {
        this.activatedRoute.data.subscribe((response) => {
            this.lastActivities = Object.assign(response, new Activity());
        });
    }

}
