import {Injectable} from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {ActivitiesService} from "../services/activities.service";

@Injectable({
    providedIn: 'root'
})
export class LastActivitiesResolver implements Resolve<object> {

    constructor(private router: Router, private service: ActivitiesService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<object> {
        const routeId = route.paramMap.get('id');

        if (!routeId) {
            this.router.navigateByUrl('admin/categories').then();
        }

        return this.service.getLastActivities();
    }
}
