import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import jwtDecode from 'jwt-decode';
import {AuthToken} from '../../auth/core/models/auth-token';

@Injectable({
  providedIn: 'root'
})
export class DefaultGuard implements CanActivate {

    constructor(private router: Router) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {

        const localStorageValue = localStorage.getItem('token');

        if (localStorageValue === null || localStorageValue === undefined) {
            return true;
        }

        const tokenStorageValue = localStorage.getItem('token');
        const decodedToken = jwtDecode(tokenStorageValue as string) as AuthToken;
        const now = Date.now().valueOf() / 1000;

        if (decodedToken.exp > now) {
            this.router.navigateByUrl('/admin/activities').then();
            return false;
        }

        return true;
    }

}
