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

    freeFormNewslettersUrl = this.newslettersUrl + 'free-form-newsletters/'

    constructor(private http: HttpClient) {
    }

    /**
     * Get newsletters created on platform.
     */
    getNewsletters = () => this.http.get<Newsletter[]>(this.newslettersUrl);

    /**
     * Get free form newsletters created on platform.
     */
    getFreeFormNewsletters = () => this.http.get<Newsletter[]>(this.freeFormNewslettersUrl);

    /**
     * Get newsletter entity by identifier.
     *
     * @param id newsletter entity identifier.
     */
    getNewsletter = (id: string) => this.http.get<Newsletter>(this.newslettersUrl + id);

    /**
     * Get free form newsletter entity by identifier.
     *
     * @param id free form newsletter entity identifier.
     */
    getFreeFormNewsletter = (id: string) => this.http.get<Newsletter>(this.freeFormNewslettersUrl + id);

    /**
     * Sending form data to create
     * newsletter entity.
     *
     * @param postData data for creating new newsletter entity.
     */
    createNewsletter = (postData: Newsletter) => this.http.post(this.newslettersUrl, postData);

    /**
     * Sending form data to create
     * free form newsletter entity.
     *
     * @param postData data for creating new free form newsletter entity.
     */
    createFreeFormNewsletter = (postData: Newsletter) => this.http.post(this.freeFormNewslettersUrl, postData);

    /**
     * Sending form data to update
     * existing newsletter entity.
     *
     * @param id newsletter entity identifier.
     * @param updateData for updating existing newsletter entity.
     */
    editNewsletter = (id: string, updateData: Newsletter) => this.http.put(this.newslettersUrl + id, updateData);

    /**
     * Sending form data to update
     * existing free form newsletter entity.
     *
     * @param id free form newsletter entity identifier.
     * @param updateData for updating existing free form newsletter entity.
     */
    editFreeFormNewsletter = (id: string, updateData: Newsletter) =>
        this.http.put(this.freeFormNewslettersUrl + id, updateData);

    /**
     * Delete newsletter entity by identifier.
     *
     * @param id newsletter entity identifier.
     */
    deleteNewsletter = (id: string) => this.http.delete(this.newslettersUrl + id);

    /**
     * Delete free form newsletter entity by identifier.
     *
     * @param id free form newsletter entity identifier.
     */
    deleteFreeFormNewsletter = (id: string) => this.http.delete(this.freeFormNewslettersUrl + id);
}
