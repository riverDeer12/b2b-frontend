import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {LatestService} from '../../services/latest.service';
import {Equipment} from '../../../../../equipment/core/models/equipment';

@Injectable({
    providedIn: 'root'
})
export class LatestEquipmentResolver implements Resolve<Equipment[]> {

    constructor(private latestService: LatestService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Equipment[]> {
        return this.latestService.getEquipment();
    }
}
