import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {User} from '../../../users/core/models/user';

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

    createSuperAdmin(user: User) {
        return this.http.post(this.superAdminUrl + '/create', user);
    }
}
