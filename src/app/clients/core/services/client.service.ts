import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {Client} from "../models/client";
import {ResearchProblem} from "../../../research-problems/core/models/research-problem";
import {Observable} from "rxjs";
import {Subject} from "rxjs/internal/Subject";

/**
 * Service that provides communication between
 * clients module and endpoints on api
 * which correspond to client entity.
 */
@Injectable({
    providedIn: 'root'
})

export class ClientService {

    clientsUrl = environment.apiUrl + '/clients/';

    client = new Subject<Client>();

    constructor(private http: HttpClient) {
    }

    /**
     * Get list of all clients registered
     * on platform.
     */
    getClients = () => this.http.get<Client[]>(this.clientsUrl);

    /**
     * Get client by id.
     *
     * @param id company identifier.
     */
    getClient = (id: string) => this.http.get<Client>(this.clientsUrl + id);

    /**
     * Create new client with form data.
     *
     * @param postData data for creating new client.
     */
    createClient = (postData: Client) => this.http.post(this.clientsUrl, postData);

    /**
     * Update existing client
     * with form data.
     *
     * @param id identifier of existing client.
     * @param updateData data for updating client.
     */
    editClient = (id: string, updateData: Client) =>
        this.http.put(this.clientsUrl + id, updateData);

    /**
     * Delete client with provided id.
     *
     * @param id client identifier.
     */
    deleteClient = (id: string) =>this.http.delete(this.clientsUrl + id);

    /**
     * Push new client
     * object to current array of client
     * items on UI.
     *
     * @param client new client item.
     */
    pingClients(client: Client): void {
        this.client.next(client);
    }

    /**
     * Listen to changes
     * on current list of client
     * items on UI.
     */
    listenClients(): Observable<Client> {
        return this.client.asObservable();
    }
}
