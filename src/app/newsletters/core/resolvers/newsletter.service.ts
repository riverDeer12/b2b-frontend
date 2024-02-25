import {Injectable} from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Newsletter} from '../models/newsletter';
import {NewsletterService} from '../services/newsletter.service';

@Injectable({
    providedIn: 'root'
})
export class NewsletterResolver implements Resolve<Newsletter> {

    constructor(private service: NewsletterService, private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Newsletter> {
        const routeId = route.paramMap.get('id');

        if (!routeId) {
            this.router.navigateByUrl('admin/newsletters').then();
        }

        return this.service.getNewsletter(routeId as string);
    }
}
