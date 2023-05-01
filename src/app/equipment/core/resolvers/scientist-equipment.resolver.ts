import {Injectable} from '@angular/core';
import {
    Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot, Router
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {EquipmentService} from "../services/equipment.service";
import {Equipment} from "../models/equipment";

@Injectable({
    providedIn: 'root'
})
export class ScientistEquipmentResolver implements Resolve<Equipment[]> {

    constructor(private router: Router, private service: EquipmentService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Equipment[]> {

        const scientistId = route.paramMap.get('id');

        if (!scientistId) {
            this.router.navigateByUrl('admin/scientists').then();
        }

        return this.service.getEquipment(scientistId as string);
    }
}
