import {Injectable} from '@angular/core';
import {Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';
import {NewsletterAdditionalContent} from '../../../core/models/newsletter-additional-content';
import {FreeFormNewsletterService} from "../services/free-form-newsletter.service";

@Injectable({
    providedIn: 'root'
})
export class FreeFormNewslettersResolver implements Resolve<NewsletterAdditionalContent[]> {

    constructor(private service: FreeFormNewsletterService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<NewsletterAdditionalContent[]> {
        return this.service.getFreeFormNewsletters();
    }
}
