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
    @Input() imageLink!: string;
    @Input() entityType!: EntityType;
    @Input() entityId!: string;

    constructor(private router: Router) {
    }

    openDetailsPage = () =>
        this.router.navigateByUrl(this.entityType + '/details/' + this.entityId)
}
