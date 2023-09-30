import { Injectable } from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {News} from "../../../../news/core/models/news";
import {Scientist} from "../../../../scientists/core/models/scientist";
import {Equipment} from "../../../../equipment/core/models/equipment";
import {Company} from "../../../../companies/core/models/company";
import {JobOffer} from "../../../../job-offers/core/models/job-offer";
import {ResearchProblem} from "../../../../research-problems/core/models/research-problem";
import {Organization} from "../../../../organizations/core/models/organization";

@Injectable({
  providedIn: 'root'
})
export class PublicService {

    private publicUrl = environment.apiUrl + '/public/';

    constructor(private http: HttpClient) {
    }

    getNews = () =>
        this.http.get<News[]>(this.publicUrl + 'news');

    getScientists = () =>
        this.http.get<Scientist[]>(this.publicUrl + 'scientists');

    getEquipment = () =>
        this.http.get<Equipment[]>(this.publicUrl + 'scientists/equipment');

    getCompanies = () =>
        this.http.get<Company[]>(this.publicUrl + 'companies');

    getJobOffers = () =>
        this.http.get<JobOffer[]>(this.publicUrl + 'companies/job-offers');

    getCompanyResearchProblems = () =>
        this.http.get<ResearchProblem[]>(this.publicUrl + 'companies/research-problems');

    getOrganizations = () =>
        this.http.get<Organization[]>(this.publicUrl + 'public-organizations');

    getOrganizationResearchProblems = () =>
        this.http.get<ResearchProblem[]>(this.publicUrl + 'public-organizations/research-problems');
}
