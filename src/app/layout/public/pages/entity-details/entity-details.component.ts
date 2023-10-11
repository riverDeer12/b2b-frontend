import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Entity} from '../../../../shared/models/entity';
import {EntityType} from '../../../../auth/core/enums/entity-type';

@Component({
    selector: 'entity-details',
    templateUrl: './entity-details.component.html',
    styleUrls: ['./entity-details.component.scss']
})
export class EntityDetailsComponent implements OnInit {
    entityType!: EntityType
    entity!: any;

    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.listenToResolver();
    }

    listenToResolver() {
        this.activatedRoute.data.subscribe((response) => {
            this.entity = Entity.assignResponseToEntity(this.entityType, response);
        });
    }
}
