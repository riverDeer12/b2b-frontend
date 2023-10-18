import {Component, Input} from '@angular/core';
import {Category} from "../../../../categories/core/models/category";
import {EntityType} from "../../../../auth/core/enums/entity-type";
import {Router} from '@angular/router';
import {News} from '../../../../news/core/models/news';

@Component({
  selector: 'entity-card',
  templateUrl: './entity-card.component.html',
  styleUrls: ['./entity-card.component.scss']
})
export class EntityCardComponent {
    @Input() entityId!: string;
    @Input() title!: string;
    @Input() imageLink!: string;
    @Input() entityCategories!: Category[];
    @Input() entityType!: EntityType;
    @Input() address!: string;
    @Input() externalLink!: string;


    categories!: any[];

    constructor(private router: Router) {
    }

    ngOnInit(){
        this.entityCategories = this.entityCategories.map((x: Category) =>
            Object.assign(new Category(), x));
    }

    openDetailsPage = () =>
        this.router.navigateByUrl(this.entityType + '/details/' + this.entityId);
}
