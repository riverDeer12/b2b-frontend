import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Entity} from '../../../../shared/models/entity';
import {EntityType} from '../../../../auth/core/enums/entity-type';

@Component({
    selector: 'entity-details',
    templateUrl: './entity-details.component.html',
    styleUrls: ['./entity-details.component.scss']
})
export class EntityDetailsComponent implements OnInit {
    entityType!: EntityType;
    entityItem!: any;
    simpleEntity!: boolean;

    public get entity(): typeof Entity {
        return Entity;
    }

    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.listenToResolver();
    }

    listenToResolver() {
        this.activatedRoute.data.subscribe((response) => {

            this.entityType = this.activatedRoute.snapshot.params['entityType'] as EntityType;

            this.entityItem = Entity.assignResponseToEntity(this.entityType, response);
        });
    }
}
