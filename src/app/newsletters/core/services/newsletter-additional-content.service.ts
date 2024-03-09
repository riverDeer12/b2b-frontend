import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {NewsletterAdditionalContent} from '../models/newsletter-additional-content';

/**
 * Service that provides communication between
 * news module and endpoints on api
 * which correspond to news entity.
 */
@Injectable({
    providedIn: 'root'
})
export class NewsletterAdditionalContentService {

    newsletterAdditionalContentsUrl = environment.apiUrl + '/newsletters/additional-contents/';

    constructor(private http: HttpClient) {
    }

    /**
     * Get newsletters created on platform.
     */
    getNewsletterAdditionalContents = () =>
        this.http.get<NewsletterAdditionalContent[]>(this.newsletterAdditionalContentsUrl);

    /**
     * Get newsletter entity by identifier.
     *
     * @param id newsletter entity identifier.
     */
    getNewsletterAdditionalContent = (id: string) =>
        this.http.get<NewsletterAdditionalContent>(this.newsletterAdditionalContentsUrl + id);

    /**
     * Sending form data to create
     * newsletter entity.
     *
     * @param postData data for creating new newsletter entity.
     */
    createNewsletterAdditionalContent = (postData: NewsletterAdditionalContent) =>
        this.http.post(this.newsletterAdditionalContentsUrl, postData);

    /**
     * Sending form data to update
     * existing newsletter entity.
     *
     * @param id newsletter entity identifier.
     * @param updateData for updating existing newsletter entity.
     */
    editNewsletterAdditionalContent = (id: string, updateData: NewsletterAdditionalContent) =>
        this.http.put(this.newsletterAdditionalContentsUrl + id, updateData);

    /**
     * Delete newsletter entity by identifier.
     *
     * @param id newsletter entity identifier.
     */
    deleteNewsletterAdditionalContent = (id: string) =>
        this.http.delete(this.newsletterAdditionalContentsUrl + id);
}
