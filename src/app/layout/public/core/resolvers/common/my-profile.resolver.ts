import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {AuthToken} from '../../../../../auth/core/models/auth-token';
import {EntityType} from '../../../../../auth/core/enums/entity-type';
import jwtDecode from 'jwt-decode';

@Injectable({
    providedIn: 'root'
})
export class MyProfileResolver implements Resolve<any> {

    private entityId!: string;

    private profileType!: EntityType;

    constructor() {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        const tokenStorageValue = localStorage.getItem('token') as string;

        const decodedToken = jwtDecode(tokenStorageValue) as AuthToken;

        this.entityId = decodedToken.nameid;

        this.setProfileType(decodedToken.role);
    }

    /**
     * Set profile type depending on role.
     *
     * @param role token role.
     */
    private setProfileType(role: string) {
        switch (role) {
            case 'PublicOrganization':
                this.profileType = EntityType.Organization;
                break;
            case 'Company':
                this.profileType = EntityType.Company;
                break;
            case 'Scientist':
                this.profileType = EntityType.Scientist;
                break;
            default:
                break;
        }
    }
}
