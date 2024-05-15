import {Injectable} from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';
import {SpecialCategory} from "../models/special-category";
import {SpecialCategoryService} from "../services/special-category.service";

@Injectable({
    providedIn: 'root'
})
export class SpecialCategoryResolver implements Resolve<SpecialCategory> {

    constructor(private service: SpecialCategoryService, private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SpecialCategory> {
        const routeId = route.paramMap.get('id');

        if (!routeId) {
            this.router.navigateByUrl('admin/special-categories').then();
        }

        return this.service.getCategory(routeId as string);
    }
}
