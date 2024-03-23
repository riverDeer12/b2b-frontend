import {Injectable} from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';
import {NewsletterAdditionalContent} from '../models/newsletter-additional-content';
import {NewsletterAdditionalContentService} from '../services/newsletter-additional-content.service';

@Injectable({
    providedIn: 'root'
})
export class NewsletterAdditionalContentResolver implements Resolve<NewsletterAdditionalContent> {

    constructor(private service: NewsletterAdditionalContentService, private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<NewsletterAdditionalContent> {
        const routeId = route.paramMap.get('id');

        if (!routeId) {
            this.router.navigateByUrl('admin/newsletters').then();
        }

        return this.service.getNewsletterAdditionalContent(routeId as string);
    }
}
