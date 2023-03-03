import {Scientist} from '../models/scientist';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ScientistService {

    scientistsUrl = environment.apiUrl + '/scientists';

    constructor(private http: HttpClient) {
    }

    getScientists(): Observable<Scientist[]> {
        return this.http.get<Scientist[]>(this.scientistsUrl + '/get');
    }

    getScientist(scientistId: string) {
        return this.http.get<Scientist>(this.scientistsUrl + '/get/' + scientistId);
    }

    createScientist(scientist: Scientist) {
        return this.http.post(this.scientistsUrl + '/create', scientist);
    }

    editScientist(scientistId: string, scientist: Scientist) {
        return this.http.post(this.scientistsUrl + '/edit/' + scientistId, scientist);
    }

    flipScientistActive(scientistId: string) {
        return this.http.post(this.scientistsUrl + '/flipActive/' + scientistId, null);
    }

    checkScientistUsername(username: string) {
        return this.http.post(this.scientistsUrl + '/checkUsername', {
            username
        });
    }
}
