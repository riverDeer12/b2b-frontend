import {Injectable} from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {ActivitiesService} from "../services/activities.service";
import {Activity} from '../models/activity';

@Injectable({
    providedIn: 'root'
})
export class LastActivitiesResolver implements Resolve<Activity> {

    constructor(private router: Router, private service: ActivitiesService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Activity> {
        return this.service.getLastActivities();
    }
}
