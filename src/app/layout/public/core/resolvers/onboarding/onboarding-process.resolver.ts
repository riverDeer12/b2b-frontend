import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {OnboardingProcessType} from "../../types/onboarding-process-type";

@Injectable({
    providedIn: 'root'
})
export class OnboardingProcessResolver implements Resolve<OnboardingProcessType> {

    constructor(private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): OnboardingProcessType {
        return route.data["type"] as OnboardingProcessType;
    }
}
