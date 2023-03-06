import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AuthToken} from '../../../../auth/core/models/auth-token';
import jwtDecode from 'jwt-decode';

@Injectable({
    providedIn: 'root'
})
export class AdminGuard implements CanActivate {

    constructor(private router: Router) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {

        const localStorageValue = localStorage.getItem('token');

        if (localStorageValue === null || localStorageValue === undefined) {
            this.router.navigateByUrl('/auth/admin-login').then()
        }

        const tokenStorageValue = localStorage.getItem('token');
        const decodedToken = jwtDecode(tokenStorageValue as string) as AuthToken;
        const now = Date.now().valueOf() / 1000;

        if (decodedToken.exp < now) {
            this.router.navigateByUrl('/login').then();
            localStorage.clear();
            return false;
        }

        return true;
    }
}
