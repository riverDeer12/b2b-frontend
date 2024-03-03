import {Injectable} from '@angular/core';
import {Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';
import {Newsletter} from '../../../core/models/newsletter';
import {FreeFormNewsletterService} from "../services/free-form-newsletter.service";

@Injectable({
    providedIn: 'root'
})
export class FreeFormNewslettersResolver implements Resolve<Newsletter[]> {

    constructor(private service: FreeFormNewsletterService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Newsletter[]> {
        return this.service.getFreeFormNewsletters();
    }
}
