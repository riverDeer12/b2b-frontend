import {Component, Input, OnInit} from '@angular/core';
import {Company} from '../../../companies/core/models/company';
import {Scientist} from '../../../scientists/core/models/scientist';
import {Organization} from '../../../organizations/core/models/organization';

@Component({
    selector: 'activity-list',
    templateUrl: './activity-list.component.html',
    styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {
    @Input() companies!: Company[];
    @Input() scientists!: Scientist[];
    @Input() organizations!: Organization[];
    @Input() companiesWithJobOffers!: Company[];
    @Input() scientistsWithEquipment!: Scientist[];
    @Input() scientistsWithSpecificKnowledge!: Scientist[];
    @Input() companiesWithResearchProblems!: Company[];
    @Input() organizationsWithResearchProblems!: Organization[];

    constructor() {
    }

    ngOnInit(): void {
    }

}
