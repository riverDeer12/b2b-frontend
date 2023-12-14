import {Injectable} from '@angular/core';
import {
    Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot, Router
} from '@angular/router';
import {Observable} from 'rxjs';
import {Product} from '../models/product';
import {ProductService} from '../services/product.service';

@Injectable({
    providedIn: 'root'
})
export class CompanyProductsResolver implements Resolve<Product[]> {

    constructor(private router: Router, private service: ProductService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[]> {

        const companyId: string | null = route.paramMap.get('id');

        if (!companyId) {
            this.router.navigateByUrl('admin/companies').then();
        }

        return this.service.getProducts(companyId as string);
    }
}
