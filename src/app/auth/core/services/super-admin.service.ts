import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {Subscriber} from '../../../subscribers/core/models/subscriber';

@Injectable({
    providedIn: 'root'
})
export class SuperAdminService {

    superAdminUrl = environment.apiUrl + '/superadmin';

    constructor(private http: HttpClient) {
    }

    passwordReset(email: string) {
        return this.http.post(this.superAdminUrl + '/passwordReset', email);
    }

    createSuperAdmin(user: Subscriber) {
        return this.http.post(this.superAdminUrl + '/create', user);
    }
}
