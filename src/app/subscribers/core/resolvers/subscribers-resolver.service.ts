import {Injectable} from '@angular/core';
import {
    Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {SubscriberService} from '../services/subscriber.service';
import {Subscriber} from '../models/subscriber';

@Injectable({
    providedIn: 'root'
})
export class SubscribersResolver implements Resolve<Subscriber[]> {

    constructor(private service: SubscriberService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Subscriber[]> {
        return this.service.getSubscribers();
    }
}
