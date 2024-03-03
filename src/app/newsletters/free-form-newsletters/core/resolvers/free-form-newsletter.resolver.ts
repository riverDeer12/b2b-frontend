import {Injectable} from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';
import {FreeFormNewsletterService} from "../services/free-form-newsletter.service";
import {Newsletter} from "../../../core/models/newsletter";

@Injectable({
    providedIn: 'root'
})
export class FreeFormNewsletterResolver implements Resolve<Newsletter> {

    constructor(private service: FreeFormNewsletterService, private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Newsletter> {
        const routeId = route.paramMap.get('id');

        if (!routeId) {
            this.router.navigateByUrl('admin/newsletters/free-form-newsletters').then();
        }

        return this.service.getFreeFormNewsletter(routeId as string);
    }
}
