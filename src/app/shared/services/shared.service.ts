import {Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {EntityType} from "../../auth/core/enums/entity-type";

@Injectable({
    providedIn: 'root'
})
export class SharedService {

    parentEntityType = new Subject<EntityType>();

    constructor() {
    }

    /**
     * Method that listens on
     * parent entity type changes.
     */
    getParentEntityType(): Subject<EntityType> {
        return this.parentEntityType;
    }

    /**
     * Method that sets
     * and triggers selected
     * parent entity type.
     */
    setParenEntityType(parentEntityType: EntityType): void {
        this.parentEntityType.next(parentEntityType);
    }
}
