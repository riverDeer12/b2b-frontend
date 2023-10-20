import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {PublicService} from "../../services/public.service";
import {Equipment} from '../../../../../equipment/core/models/equipment';

@Injectable({
  providedIn: 'root'
})
export class PublicEquipmentResolver implements Resolve<Equipment[]> {

    constructor(private publicService: PublicService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Equipment[]> {
        return this.publicService.getEquipment();
    }
}
