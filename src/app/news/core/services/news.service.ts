import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {News} from '../models/news';

@Injectable({
    providedIn: 'root'
})
export class NewsService {

    newsUrl = environment.apiUrl + '/news';

    constructor(private http: HttpClient) {
    }

    getNewsList(): Observable<News[]> {
        return this.http.get<News[]>(this.newsUrl + '/get');
    }

    getLatestNews(numberOfPosts: number): Observable<News[]> {
        return this.http.get<News[]>(this.newsUrl + '/getLatest/' + numberOfPosts);
    }

    getNews(id: string) {
        return this.http.get<News>(this.newsUrl + '/get/' + id);
    }

    createNews(news: News) {
        return this.http.post(this.newsUrl + '/create', news);
    }

    editNews(id: string, news: News) {
        return this.http.post(this.newsUrl + '/edit/' + id, news);
    }

    flipNewsActive(id: string) {
        return this.http.post(this.newsUrl + '/flipActive/' + id, null);
    }

    deleteNews(id: string) {
        return this.http.post(this.newsUrl + '/delete/' + id, null);
    }

}
