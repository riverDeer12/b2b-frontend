import {Injectable} from '@angular/core';
import {
    Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Product} from '../models/product';
import {ProductService} from '../services/product.service';

@Injectable({
    providedIn: 'root'
})
export class ProductsListResolver implements Resolve<Product[]> {

    constructor(private service: ProductService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[]> {
        return this.service.getAllProducts();
    }
}
