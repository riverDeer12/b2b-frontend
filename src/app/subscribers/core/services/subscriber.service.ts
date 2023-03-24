import {Subscriber} from '../models/subscriber';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class SubscriberService {

    subscribersUrl = environment.apiUrl + '/newsletters';

    constructor(private http: HttpClient) {
    }

    passwordReset(email: string) {
        return this.http.post(this.subscribersUrl + '/passwordReset', email);
    }

    registerSubscriber(user: Subscriber) {
        return this.http.post(this.subscribersUrl + '/register', user);
    }

    deleteSubscriber(userId: string) {
        return this.http.delete(this.subscribersUrl + '/delete/' + userId);
    }

    getSubscribers() {
        return this.http.get<Subscriber[]>(this.subscribersUrl + '/get');
    }
}
