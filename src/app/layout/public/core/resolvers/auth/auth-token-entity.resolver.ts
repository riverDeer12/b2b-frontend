import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Company} from "../../../../../companies/core/models/company";
import {AuthService} from "../../../../../auth/core/services/auth.service";
import jwtDecode from "jwt-decode";
import {AuthToken} from "../../../../../auth/core/models/auth-token";
import {CompanyService} from "../../../../../companies/core/services/company.service";
import {NotificationService} from "../../../../../shared/services/notification.service";
import {NotificationType} from "../../../../../shared/enums/notification-type";

@Injectable({
    providedIn: 'root'
})
export class AuthTokenEntityResolver implements Resolve<Company> {

    constructor(private service: CompanyService,
                private authService: AuthService,
                private notificationService: NotificationService,
                private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Company> {
        const token = route.paramMap.get('token');

        if(!token){
            this.router.navigateByUrl('').then();
            this.notificationService.showNotification(NotificationType.Success,
                'onboardings.error-processing-onboarding-item');
        }

        const onboardingEntityToken = jwtDecode(token as string) as AuthToken;

        return this.service.getCompany(onboardingEntityToken.nameid);
    }
}
