import {Category} from '../models/category';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {Observable, Subject} from 'rxjs';

/**
 * Service that provides communication between
 * categories module and endpoints on api
 * which correspond to categories module.
 */
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  endpointUrl = environment.apiUrl + '/categories';

  selectedCategorySubject = new Subject<any>();

  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.endpointUrl + '/get');
  }

  getCategory(categoryId: string) {
    return this.http.get<Category>(this.endpointUrl + '/get/' + categoryId);
  }

  createCategory(categoryName: string) {
    return this.http.post(this.endpointUrl + '/create', categoryName);
  }

  editCategory(categoryId: string, categoryName: string) {
    return this.http.post(this.endpointUrl + '/edit/' + categoryId, categoryName);
  }

  deleteCategory(categoryId: string) {
    return this.http.post(this.endpointUrl + '/delete/' + categoryId, null);
  }
}
