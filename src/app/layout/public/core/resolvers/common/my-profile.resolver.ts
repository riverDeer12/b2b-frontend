import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {AuthToken} from '../../../../../auth/core/models/auth-token';
import jwtDecode from 'jwt-decode';
import {Observable} from 'rxjs';
import {PublicService} from '../../services/public.service';
import {ScientistService} from "../../../../../scientists/core/services/scientist.service";
import {OrganizationService} from "../../../../../organizations/core/services/organization.service";
import {CompanyService} from "../../../../../companies/core/services/company.service";

@Injectable({
    providedIn: 'root'
})
export class MyProfileResolver implements Resolve<any> {

    private entityId!: string;

    constructor(private publicService: PublicService,
                private router: Router,
                private organizationService: OrganizationService,
                private companyService: CompanyService,
                private scientistService: ScientistService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        const tokenStorageValue = localStorage.getItem('token') as string;

        if(!tokenStorageValue){
            this.router.navigateByUrl('').then();
        }

        const decodedToken = jwtDecode(tokenStorageValue) as AuthToken;

        this.entityId = decodedToken.nameid;

        return this.getEntity(decodedToken.role);
    }

    /**
     * Get profile type depending on role in
     * JWT token.
     *
     * @param role token role.
     */
    private getEntity(role: string): Observable<any> {
        switch (role) {
            case 'PublicOrganization':
                return this.organizationService.getOrganization(this.entityId);
            case 'Company':
                return this.companyService.getCompany(this.entityId);
            case 'Scientist':
                return this.scientistService.getScientist(this.entityId);
            default:
                return new Observable<any>();
        }
    }
}
