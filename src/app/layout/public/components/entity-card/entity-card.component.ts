import {Component, Input} from '@angular/core';
import {Category} from '../../../../categories/core/models/category';
import {EntityType} from '../../../../auth/core/enums/entity-type';
import {Router} from '@angular/router';

@Component({
    selector: 'entity-card',
    templateUrl: './entity-card.component.html',
    styleUrls: ['./entity-card.component.scss']
})
export class EntityCardComponent {
    @Input() entityId!: string;
    @Input() title!: string;
    @Input() imageLink?: string;
    @Input() entityCategories!: Category[];
    @Input() entityType!: EntityType;
    @Input() address!: string;
    @Input() website!: string;
    @Input() externalLink!: string;


    categories!: any[];

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.entityCategories = this.entityCategories.map((x: Category) =>
            Object.assign(new Category(), x));
    }

    get shortExternalLink(): string {
        if (this.externalLink.length < 20) {
            return this.externalLink;
        }

        return this.externalLink.slice(0, 20) + '...';
    }

    get shortWebsite(): string {
        if (this.website.length < 20) {
            return this.website;
        }

        return this.website.slice(0, 20) + '...';
    }

    get shortAddress(): string {
        if (this.address.length < 30) {
            return this.address;
        }

        return this.address.slice(0, 30) + '...';
    }

    get shortTitle(): string {
        if (this.title.length < 80) {
            return this.title;
        }

        return this.title.slice(0, 80) + '...';
    }

    openDetailsPage = () =>
        this.router.navigateByUrl(this.entityType + '/details/' + this.entityId);
}
