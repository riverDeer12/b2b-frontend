import jwtDecode from 'jwt-decode';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Company} from '../../../../../companies/core/models/company';
import {EntityType} from '../../../../../auth/core/enums/entity-type';
import {AuthToken} from '../../../../../auth/core/models/auth-token';

@Injectable({
    providedIn: 'root'
})
export class EntityTypeResolver implements Resolve<EntityType> {

    constructor(private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): EntityType {
        const tokenStorageValue = localStorage.getItem('token') as string;

        if(!tokenStorageValue){
            this.router.navigateByUrl('').then();
        }

        const decodedToken = jwtDecode(tokenStorageValue) as AuthToken;

        switch (decodedToken.role) {
            case 'PublicOrganization':
                return EntityType.PublicOrganization;
            case 'Company':
                return EntityType.Company;
            case 'Scientist':
                return EntityType.Scientist;
            default:
                return EntityType.Company;
        }
    }
}
