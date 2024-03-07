import { Injectable } from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {NewsletterAdditionalContent} from "../../../core/models/newsletter-additional-content";

@Injectable({
  providedIn: 'root'
})

export class FreeFormNewsletterService {

    newslettersUrl = environment.apiUrl + '/newsletters/';

    freeFormNewslettersUrl = this.newslettersUrl + 'free-form-newsletters/'

    constructor(private http: HttpClient) {
    }

    /**
     * Get free form newsletters created on platform.
     */
    getFreeFormNewsletters = () => this.http.get<NewsletterAdditionalContent[]>(this.freeFormNewslettersUrl);

    /**
     * Get free form newsletter entity by identifier.
     *
     * @param id free form newsletter entity identifier.
     */
    getFreeFormNewsletter = (id: string) => this.http.get<NewsletterAdditionalContent>(this.freeFormNewslettersUrl + id);

    /**
     * Sending form data to create
     * free form newsletter entity.
     *
     * @param postData data for creating new free form newsletter entity.
     */
    createFreeFormNewsletter = (postData: NewsletterAdditionalContent) => this.http.post(this.freeFormNewslettersUrl, postData);

    /**
     * Sending form data to update
     * existing free form newsletter entity.
     *
     * @param id free form newsletter entity identifier.
     * @param updateData for updating existing free form newsletter entity.
     */
    editFreeFormNewsletter = (id: string, updateData: NewsletterAdditionalContent) =>
        this.http.put(this.freeFormNewslettersUrl + id, updateData);

    /**
     * Delete free form newsletter entity by identifier.
     *
     * @param id free form newsletter entity identifier.
     */
    deleteFreeFormNewsletter = (id: string) => this.http.delete(this.freeFormNewslettersUrl + id);
}
