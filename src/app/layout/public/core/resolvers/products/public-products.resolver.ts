import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {PublicService} from "../../services/public.service";
import {Equipment} from '../../../../../equipment/core/models/equipment';
import {Product} from '../../../../../products/core/models/product';

@Injectable({
  providedIn: 'root'
})
export class PublicProductsResolver implements Resolve<Product[]> {

    constructor(private publicService: PublicService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[]> {
        return this.publicService.getProducts();
    }
}
