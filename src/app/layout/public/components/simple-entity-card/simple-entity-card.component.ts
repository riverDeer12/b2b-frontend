import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {EntityType} from '../../../../auth/core/enums/entity-type';

@Component({
    selector: 'simple-entity-card',
    templateUrl: './simple-entity-card.component.html',
    styleUrls: ['./simple-entity-card.component.scss']
})
export class SimpleEntityCardComponent {
    @Input() title!: string;
    @Input() imageLink?: string;
    @Input() entityType!: EntityType;
    @Input() parentEntityType!: EntityType;
    @Input() parentEntityId!: string;
    @Input() entityId!: string;

    constructor(private router: Router) {
    }

    /**
     * Redirect user to
     * page with entity details.
     */
    openDetailsPage = () => {
        return this.parentEntityType ?
            this.router.navigateByUrl(this.parentEntityType + '/details/' + this.parentEntityId).then():
            this.router.navigateByUrl(this.entityType + '/details/' + this.entityId).then();
    }
}
