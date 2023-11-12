import {Component, Input, OnInit} from '@angular/core';
import {ActivityItem} from '../../core/models/activity-item';

@Component({
    selector: 'activity-list',
    templateUrl: './activity-list.component.html',
    styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent {
    @Input() companies!: ActivityItem[];
    @Input() scientists!: ActivityItem[];
    @Input() organizations!: ActivityItem[];
    @Input() companiesWithJobOffers!: ActivityItem[];
    @Input() scientistsWithEquipment!: ActivityItem[];
    @Input() scientistsWithSpecificKnowledge!: ActivityItem[];
    @Input() companiesWithResearchProblems!: ActivityItem[];
    @Input() organizationsWithResearchProblems!: ActivityItem[];

    @Input() dataType!: string;

    constructor() {
    }
}
