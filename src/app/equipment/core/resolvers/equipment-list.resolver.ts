import {Injectable} from '@angular/core';
import {
    Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {EquipmentService} from "../services/equipment.service";
import {Equipment} from "../models/equipment";

@Injectable({
    providedIn: 'root'
})
export class EquipmentListResolver implements Resolve<Equipment[]> {

    constructor(private service: EquipmentService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Equipment[]> {
        return this.service.getAllEquipment();
    }
}
