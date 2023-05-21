import {Scientist} from '../models/scientist';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';

/**
 * Service that provides communication between
 * scientists module and endpoints on api
 * which correspond to scientist entity.
 */
@Injectable({
    providedIn: 'root'
})
export class ScientistService {

    scientistsUrl = environment.apiUrl + '/scientists';

    constructor(private http: HttpClient) {
    }

    /**
     * Get all scientists created on platform.
     */
    getScientists = () => this.http.get<Scientist[]>(this.scientistsUrl + '/get');

    /**
     * Get selected scientist
     * by identifier.
     *
     * @param id scientist entity identifier.
     */
    getScientist = (id: string) => this.http.get<Scientist>(this.scientistsUrl + '/get/' + id);

    /**
     * Create scientist with form data.
     *
     * @param postData form data for creating scientist.
     */
    createScientist = (postData: Scientist) => this.http.post(this.scientistsUrl + '/create', postData);

    /**
     * Update existing scientist
     * with form data.
     *
     * @param id scientist entity identifier.
     * @param updateData form data for updating existing scientist.
     */
    editScientist = (id: string, updateData: Scientist) =>
        this.http.post(this.scientistsUrl + '/edit/' + id, updateData);

    /**
     * Delete selected scientist
     * by identifier.
     *
     * @param id scientist entity identifier.
     */
    deleteScientist = (id: string) => this.http.post(this.scientistsUrl + '/delete/' + id, null);

    /**
     * Check if there is already scientist
     * with same username.
     *
     * @param username value for check.
     */
    checkScientistUsername = (username: string) =>
        this.http.post(this.scientistsUrl + '/checkUsername', {
            username
        });

}
