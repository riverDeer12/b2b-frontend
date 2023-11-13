import {Injectable} from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {ActivitiesService} from "../services/activities.service";
import {Activity} from '../models/activity';
import {MostPopular} from '../models/most-popular';

@Injectable({
    providedIn: 'root'
})
export class MostPopularResolver implements Resolve<MostPopular> {

    constructor(private router: Router, private service: ActivitiesService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MostPopular> {
        return this.service.getMostPopularEntities();
    }
}
