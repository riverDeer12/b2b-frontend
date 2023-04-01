import {Injectable} from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {EquipmentService} from "../services/equipment.service";
import {Equipment} from "../../../scientists/core/models/equipment/equipment";

@Injectable({
    providedIn: 'root'
})
export class EquipmentResolver implements Resolve<Equipment> {

    constructor(private service: EquipmentService, private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Equipment> {
        const routeId = route.paramMap.get('id');

        if (!routeId) {
            this.router.navigateByUrl('admin/equipment').then();
        }

        const scientistId = route.paramMap.get('scientist-id');

        if (!scientistId) {
            this.router.navigateByUrl('admin/equipment').then();
        }

        return this.service.getSingleEquipment(scientistId as string, routeId as string);
    }
}
