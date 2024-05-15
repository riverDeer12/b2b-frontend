import {Injectable} from '@angular/core';
import {
    Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';
import {SpecialCategoryService} from "../services/special-category.service";
import {SpecialCategory} from "../models/special-category";

@Injectable({
    providedIn: 'root'
})
export class SpecialCategoriesResolver implements Resolve<SpecialCategory[]> {

    constructor(private service: SpecialCategoryService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SpecialCategory[]> {
        return this.service.getCategories();
    }
}
