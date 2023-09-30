import {Component, Input} from '@angular/core';
import {Category} from "../../../../categories/core/models/category";
import {EntityType} from "../../../../auth/core/enums/entity-type";

@Component({
  selector: 'entity-card',
  templateUrl: './entity-card.component.html',
  styleUrls: ['./entity-card.component.scss']
})
export class EntityCardComponent {
    @Input() title!: string;
    @Input() imageLink!: string;
    @Input() detailsLink!: string;
    @Input() categories!: Category[];
    @Input() entityType!: EntityType;
    @Input() address!: string;
}
