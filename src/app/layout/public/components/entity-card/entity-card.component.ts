import {Component, Input} from '@angular/core';
import {Category} from "../../../../categories/core/models/category";
import {EntityType} from "../../../../auth/core/enums/entity-type";
import {Router} from '@angular/router';

@Component({
  selector: 'entity-card',
  templateUrl: './entity-card.component.html',
  styleUrls: ['./entity-card.component.scss']
})
export class EntityCardComponent {
    @Input() entityId!: string;
    @Input() title!: string;
    @Input() imageLink!: string;
    @Input() categories!: Category[];
    @Input() entityType!: EntityType;
    @Input() address!: string;


    constructor(private router: Router) {
    }

    openDetailsPage = () =>
        this.router.navigateByUrl(this.entityType + '/details/' + this.entityId)
}
