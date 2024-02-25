import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {Newsletter} from '../models/newsletter';

/**
 * Service that provides communication between
 * news module and endpoints on api
 * which correspond to news entity.
 */
@Injectable({
    providedIn: 'root'
})
export class NewsletterService {

    newslettersUrl = environment.apiUrl + '/newsletters/';

    constructor(private http: HttpClient) {
    }

    /**
     * Get newsletters created on platform.
     */
    getNewsletters = () => this.http.get<Newsletter[]>(this.newslettersUrl);

    /**
     * Get newsletter entity by identifier.
     *
     * @param id newsletter entity identifier.
     */
    getNewsletter = (id: string) => this.http.get<Newsletter>(this.newslettersUrl + id);

    /**
     * Sending form data to create
     * newsletter entity.
     *
     * @param postData data for creating new newsletter entity.
     */
    createNewsletter = (postData: Newsletter) => this.http.post(this.newslettersUrl, postData);

    /**
     * Sending form data to update
     * existing newsletter entity.
     *
     * @param id newsletter entity identifier.
     * @param updateData for updating existing newsletter entity.
     */
    editNewsletter = (id: string, updateData: Newsletter) => this.http.put(this.newslettersUrl  + id, updateData);

    /**
     * Delete newsletter entity by identifier.
     *
     * @param id newsletter entity identifier.
     */
    deleteNewsletter = (id: string) => this.http.delete(this.newslettersUrl + id);
}
