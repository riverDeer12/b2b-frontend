import {Injectable} from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';
import {Product} from '../models/product';
import {ProductService} from '../services/product.service';

@Injectable({
    providedIn: 'root'
})
export class ProductResolver implements Resolve<Product> {

    constructor(private service: ProductService, private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
        const routeId: string | null = route.paramMap.get('id');

        if (!routeId) {
            this.router.navigateByUrl('admin/products').then();
        }

        const companyId: string | null = route.paramMap.get('company-id');

        if (!companyId) {
            this.router.navigateByUrl('admin/products').then();
        }

        return this.service.getProduct(companyId as string, routeId as string);
    }
}
