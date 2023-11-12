import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Activity} from '../../core/models/activity';
import {MostPopular} from '../../core/models/most-popular';
import {ActivityType} from '../../core/enums/activity-type';

@Component({
    selector: 'activities-home-page',
    templateUrl: './activities-home.component.html',
    styleUrls: ['./activities-home.component.css']
})
export class ActivitiesHomeComponent implements OnInit {
    lastActivities!: Activity;
    mostPopular!: MostPopular;


    public get activityType(): typeof ActivityType{
        return ActivityType;
    }

    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.listenToResolver();
    }

    private listenToResolver() {
        this.activatedRoute.data.subscribe((response) => {
            this.lastActivities = Object.assign(response['lastActivities'], new Activity());
            this.mostPopular = Object.assign(response, new MostPopular());
        });
    }

}
