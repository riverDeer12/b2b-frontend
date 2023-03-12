import {Injectable} from '@angular/core';
import {Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Category} from "../models/category";
import {CategoryService} from "../services/category.service";

@Injectable({
    providedIn: 'root'
})
export class CategoriesResolver implements Resolve<Category[]> {

    constructor(private service: CategoryService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Category[]> {
        return this.service.getCategories();
    }
}
