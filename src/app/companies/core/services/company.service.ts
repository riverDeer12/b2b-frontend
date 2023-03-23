import {Company} from '../models/company';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class CompanyService {

    companiesUrl = environment.apiUrl + '/companies/';

    constructor(private http: HttpClient) {
    }

    getCompanies(): Observable<Company[]> {
        return this.http.get<Company[]>(this.companiesUrl + 'get');
    }

    getCompany(companyId: string) {
        return this.http.get<Company>(this.companiesUrl + 'get/' + companyId);
    }

    createCompany(company: Company) {
        return this.http.post(this.companiesUrl + 'create', company);
    }

    editCompany(companyId: string, company: Company) {
        return this.http.post(this.companiesUrl + 'edit/' + companyId, company);
    }

    checkCompanyUsername(username: string) {
        return this.http.post(this.companiesUrl + 'checkUsername', {
            username
        });
    }

    deleteCompany(companyId: string) {
        return this.http.post(this.companiesUrl + 'delete/' + companyId, null);
    }

    flipCompanyActive(companyId: string) {
        return this.http.post(this.companiesUrl + 'flipActive/' + companyId, null);
    }
}
