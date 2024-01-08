import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {EntityType} from '../../../auth/core/enums/entity-type';
import {Product} from '../models/product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    companyProductsUrl = environment.apiUrl + '/companies/';

    product = new Subject<Product>();

    constructor(private http: HttpClient) {
    }

    /**
     * Get product entities
     * created on platform.
     */
    getAllProducts = () => this.http.get<Product[]>(environment.apiUrl + '/' + EntityType.Product);

    /**
     * Get products for selected
     * company.
     *
     * @param companyId id of related company entity.
     */
    getProducts = (companyId: string) =>
        this.http.get<Product[]>(this.companyProductsUrl + companyId + '/' + EntityType.Product);

    /**
     * Find product entity by identifier.
     *
     * @param companyId id of related company entity.
     * @param id product entity identifier.
     */
    getProduct = (companyId: string, id: string) =>
        this.http.get<Product>(this.companyProductsUrl + companyId + '/'
            + EntityType.Product + '/' + id);

    /**
     * Create product entity with
     * data from form.
     *
     * @param companyId id of related company entity.
     * @param postData form data for creating product.
     */
    createProduct = (companyId: string, postData: Product) =>
        this.http.post<Product>(this.companyProductsUrl + companyId + '/'
            + EntityType.Product, postData);

    /**
     * Update existing product data
     * with update data from form.
     *
     * @param companyId id of related company entity.
     * @param id product entity identifier.
     * @param updateData form data for updating existing product.
     */
    editProduct = (companyId: string, id: string, updateData: Product) =>
        this.http.put<Product>(this.companyProductsUrl + companyId + '/'
            + EntityType.Product + '/' + id, updateData);

    /**
     * Delete product entity.
     *
     * @param companyId id of related company entity.
     * @param id product entity identifier.
     */
    deleteProduct = (companyId: string, id: string) =>
        this.http.delete(this.companyProductsUrl + companyId + '/' + EntityType.Product + '/' + id);

    /**
     * Push new product
     * object to current array of product
     * items on UI.
     *
     * @param product new product item
     */
    pingProduct(product: Product): void {
        this.product.next(product);
    }

    /**
     * Listen to changes
     * on current list of product
     * items on UI.
     */
    listenProduct(): Observable<Product> {
        return this.product.asObservable();
    }
}
