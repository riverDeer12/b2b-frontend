import {EntityType} from 'src/app/auth/core/enums/entity-type';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {Observable, Subject} from 'rxjs';
import jwtDecode from 'jwt-decode';
import {AuthUnit} from '../models/auth-unit';
import {AuthToken} from '../models/auth-token';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    authUrl = environment.apiUrl + '/auth';

    loginSubject = new Subject<any>();

    constructor(private http: HttpClient, private router: Router) {
    }

    loginUser(authUnit: AuthUnit, loginType: EntityType): Observable<object> {
        switch (loginType) {
            case EntityType.Company:
                return this.loginCompany(authUnit);
            case EntityType.PublicOrganization:
                return this.loginPublicOrganization(authUnit);
            case EntityType.Scientist:
                return this.loginScientist(authUnit);
        }

        return new Observable<object>();
    }

    loginCompany(authCompany: AuthUnit) {
        return this.http.post(this.authUrl + '/login/company', authCompany);
    }

    loginScientist(authScientist: AuthUnit) {
        return this.http.post(this.authUrl + '/login/scientist', authScientist);
    }

    loginPublicOrganization(authPublicOrganization: AuthUnit) {
        return this.http.post(
            this.authUrl + '/login/publicOrganization',
            authPublicOrganization
        );
    }

    loginSuperAdmin(authSuperAdmin: AuthUnit) {
        return this.http.post(this.authUrl + '/login/superadmin', authSuperAdmin);
    }

    userLogged(): boolean {
        const tokenStorageValue = localStorage.getItem('token');

        if (tokenStorageValue === null) {
            return false;
        }

        const decodedToken = jwtDecode(tokenStorageValue) as AuthToken;

        const now = Date.now().valueOf() / 1000;
        if (decodedToken.exp < now) {
            return false;
        }

        return decodedToken.role === 'Scientist' ||
            decodedToken.role === 'PublicOrganization' ||
            decodedToken.role === 'Company';
    }

    /**
     * Log out user from application.
     *
     * @param redirectUrl preferred redirect url.
     */
    logOut(redirectUrl: string): void {
        localStorage.clear();
        this.router.navigateByUrl(redirectUrl).then();
    }

    getLogoutUrl(): string {
        const tokenStorageValue = localStorage.getItem('token');
        const decodedToken = jwtDecode(tokenStorageValue as string) as AuthToken;
        if (decodedToken.role === 'SuperAdmin') {
            return '/auth/admin-login';
        } else {
            return '/auth/user-login';
        }
    }

    userSuccessFullyLogged(): void {
        this.loginSubject.next({success: true});
    }

    getUserLoginStatus(): Observable<any> {
        return this.loginSubject.asObservable();
    }

    resetPassword = (username: string, resetPasswordEndpoint: string) =>
        this.http.post(resetPasswordEndpoint, {username});

    isSuperAdminLogged(): boolean {
        const tokenStorageValue = localStorage.getItem('token');

        if (tokenStorageValue === null) {
            return false;
        }

        const decodedToken = jwtDecode(tokenStorageValue) as AuthToken;
        const now = Date.now().valueOf() / 1000;
        if (decodedToken.exp < now) {
            return false;
        }
        return decodedToken.role === 'SuperAdmin';

    }
}
