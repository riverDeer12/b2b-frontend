import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {News} from '../models/news';

/**
 * Service that provides communication between
 * news module and endpoints on api
 * which correspond to news entity.
 */
@Injectable({
    providedIn: 'root'
})
export class NewsService {

    newsUrl = environment.apiUrl + '/news/';

    constructor(private http: HttpClient) {
    }

    /**
     * Get news created on platform.
     */
    getNewsList = () => this.http.get<News[]>(this.newsUrl);

    /**
     * Get news entity by identifier.
     *
     * @param id news entity identifier.
     */
    getNews = (id: string) => this.http.get<News>(this.newsUrl + id);

    /**
     * Sending form data to create
     * news entity.
     *
     * @param postData data for creating new news entity.
     */
    createNews = (postData: News) => this.http.post(this.newsUrl, postData);

    /**
     * Sending form data to update
     * existing news entity.
     *
     * @param id news entity identifier.
     * @param updateData for updating existing news entity.
     */
    editNews = (id: string, updateData: News) => this.http.put(this.newsUrl  + id, updateData);

    /**
     * Delete news entity by identifier.
     *
     * @param id news entity identifier.
     */
    deleteNews = (id: string) => this.http.delete(this.newsUrl + id);

    /**
     * Translate any input text
     * with Google Cloud service function.
     *
     * @param text text value
     * @param sourceLanguage language of text (hr - croatian).
     * @param targetLanguage target language of translation (en - english).
     */
    translate(text: string, sourceLanguage: string, targetLanguage: string) {
        const translateRequest = {
            text: text,
            sourceLanguage: sourceLanguage,
            targetLanguage: targetLanguage
        };

        return this.http.post(this.newsUrl + 'translate-content', translateRequest);
    }
}
