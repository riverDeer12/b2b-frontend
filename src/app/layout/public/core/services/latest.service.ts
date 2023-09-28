import {Injectable} from '@angular/core';
import {environment} from '../../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {News} from '../../../../news/core/models/news';
import {Equipment} from '../../../../equipment/core/models/equipment';
import {Company} from '../../../../companies/core/models/company';
import {JobOffer} from '../../../../job-offers/core/models/job-offer';
import {ResearchProblem} from '../../../../research-problems/core/models/research-problem';
import {Organization} from '../../../../organizations/core/models/organization';
import {Scientist} from '../../../../scientists/core/models/scientist';

@Injectable({
    providedIn: 'root'
})
export class LatestService {

    private publicUrl = environment.apiUrl + '/public/';

    private entityCardsNumber = 3

    constructor(private http: HttpClient) {
    }

    getLatestNews = () =>
        this.http.get<News[]>(this.publicUrl + 'news/getLatest/' + this.entityCardsNumber);

    getScientists = () =>
        this.http.get<Scientist[]>(this.publicUrl + 'scientists/getLatest/' + this.entityCardsNumber);

    getEquipment = () =>
        this.http.get<Equipment[]>(this.publicUrl + 'scientists/getLatestEquipment/' + this.entityCardsNumber);

    getCompanies = () =>
        this.http.get<Company[]>(this.publicUrl + 'companies/getLatest/' + this.entityCardsNumber);

    getJobOffers = () =>
        this.http.get<JobOffer[]>(this.publicUrl + 'companies/getLatestJobOffers/' + this.entityCardsNumber);

    getCompanyResearchProblems = () =>
        this.http.get<ResearchProblem[]>(this.publicUrl + 'companies/getLatestResearchProblems/' + this.entityCardsNumber);

    getOrganizations = () =>
        this.http.get<Organization[]>(this.publicUrl + 'publicOrganizations/getLatest/' + this.entityCardsNumber);

    getOrganizationResearchProblems = () =>
        this.http.get<ResearchProblem[]>(this.publicUrl + 'publicOrganizations/getLatestResearchProblems/' + this.entityCardsNumber);
}
