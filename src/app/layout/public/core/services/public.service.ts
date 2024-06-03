import {Injectable} from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {News} from "../../../../news/core/models/news";
import {Scientist} from "../../../../scientists/core/models/scientist";
import {Equipment} from "../../../../equipment/core/models/equipment";
import {Company} from "../../../../companies/core/models/company";
import {JobOffer} from "../../../../job-offers/core/models/job-offer";
import {ResearchProblem} from "../../../../research-problems/core/models/research-problem";
import {Organization} from "../../../../organizations/core/models/organization";
import {SpecificKnowledge} from '../../../../specific-knowledge/core/models/specific-knowledge';
import {Product} from '../../../../products/core/models/product';
import {EntityType} from "../../../../auth/core/enums/entity-type";
import {FinancingSource} from "../../../../financing-sources/core/models/financing-source";

@Injectable({
    providedIn: 'root'
})
export class PublicService {
    private publicUrl = environment.apiUrl + '/public/';

    constructor(private http: HttpClient) {
    }

    getNewsList = () =>
        this.http.get<News[]>(this.publicUrl + 'news');

    getNews = (id: string) =>
        this.http.get<News>(this.publicUrl + 'news/' + id);

    getScientists = () =>
        this.http.get<Scientist[]>(this.publicUrl + 'scientists');

    getScientist = (id: string) =>
        this.http.get<Scientist>(this.publicUrl + 'scientists/' + id);

    getEquipment = () =>
        this.http.get<Equipment[]>(this.publicUrl + 'scientists/equipment');

    getSpecificKnowledge = () =>
        this.http.get<SpecificKnowledge[]>(this.publicUrl + 'scientists/specific-knowledge');

    getCompanies = () =>
        this.http.get<Company[]>(this.publicUrl + 'companies');

    getCompany = (id: string) =>
        this.http.get<Company>(this.publicUrl + 'companies/' + id);

    getJobOffers = () =>
        this.http.get<JobOffer[]>(this.publicUrl + 'companies/job-offers');

    getCompanyResearchProblems = () =>
        this.http.get<ResearchProblem[]>(this.publicUrl + 'companies/research-problems');

    getOrganizations = () =>
        this.http.get<Organization[]>(this.publicUrl + 'public-organizations');

    getOrganization = (id: string) =>
        this.http.get<Organization>(this.publicUrl + 'public-organizations/' + id);

    getOrganizationResearchProblems = () =>
        this.http.get<ResearchProblem[]>(this.publicUrl + 'public-organizations/research-problems');

    getProducts = () =>
        this.http.get<Product[]>(this.publicUrl + 'companies/products');

    sendKeywordPhrase = (keywords: string[],
                         entityType: EntityType,
                         parentEntityType?: EntityType) =>
        parentEntityType ?
            this.http.post(this.publicUrl + parentEntityType + '/' + entityType.toString() + '/keywords', {
                keywords: keywords
            }) :
            this.http.post(this.publicUrl + entityType.toString() + '/keywords', {
                keywords: keywords
            });

    getFinancingSources = () =>
        this.http.get<FinancingSource[]>(this.publicUrl + 'financing-sources');
}
