import {Category} from '../models/category';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';

/**
 * Service that provides communication between
 * categories module and endpoints on api
 * which correspond to category entity.
 */
@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    endpointUrl = environment.apiUrl + '/categories/';

    constructor(private http: HttpClient) {
    }

    /**
     * Get all created categories.
     */
    getCategories = () => this.http.get<Category[]>(this.endpointUrl);

    /**
     * Get selected category by identifier.
     *
     * @param id category entity identifier.
     */
    getCategory = (id: string) => this.http.get<Category>(this.endpointUrl + id);

    /**
     * Create category with name
     * in parameter.
     *
     * @param categoryName name value.
     */
    createCategory = (categoryName: string) => this.http.post(this.endpointUrl, categoryName);

    /**
     * Update category with name
     * in parameter.
     *
     * @param id category entity identifier.
     * @param categoryName name value.
     */
    editCategory(id: string, categoryName: string) {
        return this.http.put(this.endpointUrl + id, categoryName);
    }


    /**
     * Delete selected category by identifier.
     *
     * @param id category entity identifier.
     */
    deleteCategory = (id: string) => this.http.delete(this.endpointUrl + id);
}
