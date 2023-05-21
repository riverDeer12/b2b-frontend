import {EntityType} from 'src/app/auth/core/enums/entity-type';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {Observable, Subject} from 'rxjs';
import jwtDecode from 'jwt-decode';
import {AuthUnit} from '../models/auth-unit';
import {AuthToken} from '../models/auth-token';

/**
 * Service that provides communication between
 * authentication module and endpoints on api
 * which correspond to authentication.
 */
@Injectable({
    providedIn: 'root',
})
export class AuthService {
    authUrl = environment.apiUrl + '/auth';

    loginSubject = new Subject<any>();

    constructor(private http: HttpClient, private router: Router) {
    }

    /**
     * Send request to corresponding
     * entity type for user login.
     *
     * @param authUnit credentials (auth data).
     * @param entityType type of entity that wants to login.
     */
    loginUser(authUnit: AuthUnit, entityType: EntityType): Observable<object> {
        switch (entityType) {
            case EntityType.Company:
                return this.loginCompany(authUnit);
            case EntityType.PublicOrganization:
                return this.loginPublicOrganization(authUnit);
            case EntityType.Scientist:
                return this.loginScientist(authUnit);
        }

        return new Observable<object>();
    }

    /**
     * Send request with auth data to
     * login company entity type.
     *
     * @param authUnit auth data.
     */
    loginCompany = (authUnit: AuthUnit) => this.http.post(this.authUrl + '/login/company', authUnit);


    /**
     * Send request with auth data to
     * login scientist entity type.
     *
     * @param authUnit auth data.
     */
    loginScientist = (authUnit: AuthUnit) => this.http.post(this.authUrl + '/login/scientist', authUnit);


    /**
     * Send request with auth data to
     * login public organization entity type.
     *
     * @param authUnit auth data.
     */
    loginPublicOrganization = (authUnit: AuthUnit) => this.http.post(
        this.authUrl + '/login/publicOrganization',
        authUnit
    );

    /**
     * Send request for getting auth
     * credentials (JWT token) for superadmin.)
     *
     * @param authSuperAdmin auth data for super admin login.
     */
    loginSuperAdmin = (authSuperAdmin: AuthUnit) =>
        this.http.post(this.authUrl + '/login/superadmin', authSuperAdmin);

    /**
     * Check if user is still
     * logged in application.
     */
    userLogged(): boolean {
        const tokenStorageValue = localStorage.getItem('token');

        if (tokenStorageValue === null) {
            return false;
        }

        const decodedToken = jwtDecode(tokenStorageValue) as AuthToken;

        const now = Date.now().valueOf() / 1000

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

    /**
     * Get logout url based
     * on user's role.
     */
    getLogoutUrl(): string {
        const tokenStorageValue = localStorage.getItem('token');
        const decodedToken = jwtDecode(tokenStorageValue as string) as AuthToken;

        if (decodedToken.role === 'SuperAdmin') {
            return 'auth/admin-login';
        } else {
            return 'auth/user-login';
        }
    }

    /**
     * Send reset password request
     * for user with given username.
     *
     * @param username username value.
     * @param resetPasswordEndpoint endpoint for resetting user's password.
     */
    resetPassword = (username: string, resetPasswordEndpoint: string) =>
        this.http.post(resetPasswordEndpoint, {username});

    /**
     * Helper method for checking if
     * super admin is logged.
     */
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
