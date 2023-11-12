import {Component, Input} from '@angular/core';
import {Organization} from '../../../organizations/core/models/organization';
import {Company} from '../../../companies/core/models/company';
import {Scientist} from '../../../scientists/core/models/scientist';
import {News} from '../../../news/core/models/news';

@Component({
    selector: 'most-popular-entities',
    templateUrl: './most-popular-entities.component.html',
    styleUrls: ['./most-popular-entities.component.scss']
})
export class MostPopularEntitiesComponent {
    @Input() organizations!: Organization[];
    @Input() companies!: Company[];
    @Input() scientists!: Scientist[];
    @Input() news!: News[];
}
