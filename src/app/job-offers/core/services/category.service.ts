import {Category} from '../models/category';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoriesUrl = environment.apiUrl + '/categories';

  selectedCategorySubject = new Subject<any>();

  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUrl + '/get');
  }

  getCategory(categoryId: string) {
    return this.http.get<Category>(this.categoriesUrl + '/get/' + categoryId);
  }

  createCategory(categoryName: string) {
    return this.http.post(this.categoriesUrl + '/create', categoryName);
  }

  editCategory(categoryId: string, categoryName: string) {
    return this.http.post(this.categoriesUrl + '/edit/' + categoryId, categoryName);
  }

  deleteCategory(categoryId: string) {
    return this.http.post(this.categoriesUrl + '/delete/' + categoryId, null);
  }

  pingCategorySelected(): void {
    this.selectedCategorySubject.next({success: true});
  }

  listenSelectedCategories(): Observable<any> {
    return this.selectedCategorySubject.asObservable();
  }
}
