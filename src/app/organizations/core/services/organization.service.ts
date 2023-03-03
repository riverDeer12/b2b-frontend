import {Organization} from '../models/organization';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class OrganizationService {

    organizationsUrl = environment.apiUrl + '/publicOrganizations';

    constructor(private http: HttpClient) {
    }

    getOrganizations(): Observable<Organization[]> {
        return this.http.get<Organization[]>(this.organizationsUrl + '/get');
    }

    getOrganization(organizationId: string) {
        return this.http.get<Organization>(this.organizationsUrl + '/get/' + organizationId);
    }

    createOrganization(organization: Organization) {
        return this.http.post(this.organizationsUrl + '/create', organization);
    }

    editOrganization(organizationId: string, organization: Organization) {
        return this.http.post(this.organizationsUrl + '/edit/' + organizationId, organization);
    }

    checkOrganizationUsername(username: string) {
        return this.http.post(this.organizationsUrl + '/checkUsername', {
            username
        });
    }

    flipOrganizationActive(organizationId: string) {
        return this.http.post(this.organizationsUrl + '/flipActive/' + organizationId, null);
    }
}
