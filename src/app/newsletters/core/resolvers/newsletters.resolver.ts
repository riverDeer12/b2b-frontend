import {Injectable} from '@angular/core';
import {Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Newsletter} from '../models/newsletter';
import {NewsletterService} from '../services/newsletter.service';

@Injectable({
    providedIn: 'root'
})
export class NewslettersResolver implements Resolve<Newsletter[]> {

    constructor(private service: NewsletterService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Newsletter[]> {
        return this.service.getNewsletters();
    }
}
