import {Injectable} from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Category} from "../models/category";
import {CategoryService} from "../services/category.service";

@Injectable({
    providedIn: 'root'
})
export class CategoryResolver implements Resolve<Category> {

    constructor(private service: CategoryService, private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Category> {
        const routeId = route.paramMap.get('id');

        if (!routeId) {
            this.router.navigateByUrl('admin/categories').then();
        }

        return this.service.getCategory(routeId as string);
    }
}
