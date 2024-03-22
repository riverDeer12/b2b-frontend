import {Injectable} from '@angular/core';
import {Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {NewsletterAdditionalContent} from '../models/newsletter-additional-content';
import {NewsletterAdditionalContentService} from '../services/newsletter-additional-content.service';

@Injectable({
    providedIn: 'root'
})
export class NewsletterAdditionalContentsResolver implements Resolve<NewsletterAdditionalContent[]> {

    constructor(private service: NewsletterAdditionalContentService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<NewsletterAdditionalContent[]> {
        return this.service.getNewsletterAdditionalContents();
    }
}
