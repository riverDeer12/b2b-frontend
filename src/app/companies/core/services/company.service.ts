import {Company} from '../models/company';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';

/**
 * Service that provides communication between
 * companies module and endpoints on api
 * which correspond to company entity.
 */
@Injectable({
    providedIn: 'root'
})

export class CompanyService {

    companiesUrl = environment.apiUrl + '/companies/';

    constructor(private http: HttpClient) {
    }

    /**
     * Get list of all companies registered
     * on platform.
     */
    getCompanies = () => this.http.get<Company[]>(this.companiesUrl + 'get');

    /**
     * Get company by id.
     *
     * @param id company identifier.
     */
    getCompany = (id: string) => this.http.get<Company>(this.companiesUrl + 'get/' + id);

    /**
     * Create new company with form data.
     *
     * @param postData data for creating new company.
     */
    createCompany = (postData: Company) => this.http.post(this.companiesUrl + 'create', postData);

    /**
     * Update existing company
     * with form data.
     *
     * @param id identifier of existing company.
     * @param updateData data for updating company.
     */
    editCompany = (id: string, updateData: Company) => this.http.post(this.companiesUrl + 'edit/' + id, updateData);

    /**
     * Check if there is
     * company with same username.
     *
     * @param username value for check.
     */
    checkCompanyUsername = (username: string) => this.http.post(this.companiesUrl + 'checkUsername', {
        username
    });

    /**
     * Delete company with provided id.
     *
     * @param id company identifier.
     */
    deleteCompany = (id: string) =>this.http.post(this.companiesUrl + 'delete/' + id, null);
}
