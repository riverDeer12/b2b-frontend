import {Organization} from '../models/organization';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';

/**
 * Service that provides communication between
 * organizations module and endpoints on api
 * which correspond to organization entity.
 */
@Injectable({
    providedIn: 'root'
})
export class OrganizationService {

    organizationsUrl = environment.apiUrl + '/public-organizations/';

    constructor(private http: HttpClient) {
    }

    /**
     * Get all created organizations.
     */
    getOrganizations = () => this.http.get<Organization[]>(this.organizationsUrl);

    /**
     * Get selected organization entity.
     *
     * @param id organization entity identifier.
     */
    getOrganization = (id: string) =>
        this.http.get<Organization>(this.organizationsUrl + id);

    /**
     * Create organization with
     * provided form data.
     *
     * @param postData form data for creating organization.
     */
    createOrganization = (postData: Organization) =>
        this.http.post(this.organizationsUrl, postData);

    /**
     * Update organization data with
     * provided update data from form.
     *
     * @param id organization entity identifier.
     * @param updateData form data for updating existing organization.
     */
    editOrganization = (id: string, updateData: Organization) =>
        this.http.put(this.organizationsUrl + id, updateData);

    /**
     * Check if there is organization
     * with same username.
     *
     * @param username value for check.
     */
    checkOrganizationUsername = (username: string) =>
        this.http.post(this.organizationsUrl + 'check-username', {
        username
    });

    /**
     * Delete organization entity
     * by provided organization identifier.
     *
     * @param id organization entity identifier.
     */
    deleteOrganization = (id: string) =>
        this.http.delete(this.organizationsUrl + id);

}
