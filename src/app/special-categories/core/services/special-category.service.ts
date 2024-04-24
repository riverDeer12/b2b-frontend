import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {SpecialCategory} from "../models/special-category";

@Injectable({
  providedIn: 'root'
})
export class SpecialCategoryService {

    endpointUrl = environment.apiUrl + '/user-tags/';

    constructor(private http: HttpClient) {
    }

    /**
     * Get all created categories.
     */
    getCategories = () => this.http.get<SpecialCategory[]>(this.endpointUrl);

    /**
     * Get selected category by identifier.
     *
     * @param id category entity identifier.
     */
    getCategory = (id: string) => this.http.get<SpecialCategory>(this.endpointUrl + id);

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
