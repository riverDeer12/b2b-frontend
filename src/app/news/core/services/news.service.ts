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

    newsUrl = environment.apiUrl + '/news';

    constructor(private http: HttpClient) {
    }

    /**
     * Get news created on platform.
     */
    getNewsList = () => this.http.get<News[]>(this.newsUrl + '/get');

    /**
     * Get latest news report.
     *
     * @param numberOfPosts number of wanted posts for
     * latest news report.
     */
    getLatestNews = (numberOfPosts: number) => this.http.get<News[]>(this.newsUrl + '/getLatest/' + numberOfPosts);

    /**
     * Get news entity by identifier.
     *
     * @param id news entity identifier.
     */
    getNews = (id: string) => this.http.get<News>(this.newsUrl + '/get/' + id);

    /**
     * Sending form data to create
     * news entity.
     *
     * @param postData data for creating new news entity.
     */
    createNews = (postData: News) => this.http.post(this.newsUrl + '/create', postData);

    /**
     * Sending form data to update
     * existing news entity.
     *
     * @param id news entity identifier.
     * @param updateData for updating existing news entity.
     */
    editNews = (id: string, updateData: News) => this.http.post(this.newsUrl + '/edit/' + id, updateData);

    /**
     * Delete news entity by identifier.
     *
     * @param id news entity identifier.
     */
    deleteNews = (id: string) => this.http.post(this.newsUrl + '/delete/' + id, null);
}
