import {Component} from '@angular/core';
import {PublicService} from "../../core/services/public.service";
import {Scientist} from "../../../../scientists/core/models/scientist";
import {EntityType} from "../../../../auth/core/enums/entity-type";
import {ActivatedRoute, Router} from "@angular/router";
import {Organization} from "../../../../organizations/core/models/organization";
import {Equipment} from "../../../../equipment/core/models/equipment";
import {SpecificKnowledge} from "../../../../specific-knowledge/core/models/specific-knowledge";
import {ResearchProblem} from "../../../../research-problems/core/models/research-problem";
import {Product} from "../../../../products/core/models/product";
import {JobOffer} from "../../../../job-offers/core/models/job-offer";
import {Company} from "../../../../companies/core/models/company";
import {NotificationType} from "../../../../shared/enums/notification-type";
import {NotificationService} from "../../../../shared/services/notification.service";
import {FinancingSource} from "../../../../financing-sources/core/models/financing-source";

@Component({
    selector: 'keyword-results',
    templateUrl: './keyword-results.component.html',
    styleUrls: ['./keyword-results.component.scss']
})
export class KeywordResultsComponent {

    areScientistsLoading: boolean = true;
    scientists: Scientist[] = [] = [];

    areEquipmentLoading: boolean = true;
    equipment: Equipment[] = [];

    areSpecificKnowledgeLoading: boolean = true;
    specificKnowledge: SpecificKnowledge[] = [];

    areCompaniesLoading: boolean = true;
    companies: Company[] = [];

    areJobOffersLoading: boolean = true;
    jobOffers: JobOffer[] = [];

    areProductsLoading: boolean = true;
    products: Product[] = [];

    areCompanyResearchProblemsLoading: boolean = true;
    companyResearchProblems: ResearchProblem[] = [];

    areOrganizationsLoading: boolean = true;
    organizations: Organization[] = [];

    areOrganizationResearchProblemsLoading: boolean = true;
    organizationResearchProblems: ResearchProblem[] = [];

    areFinancingSourcesLoading: boolean = true;
    financingSources: FinancingSource[] = [];

    keywords!: string[];

    keywordPhrase!: string;

    constructor(private publicService: PublicService,
                private router: Router,
                private notificationService: NotificationService,
                private activatedRoute: ActivatedRoute) {
        this.listenToResolver();
    }

    private listenToResolver(): void {
        this.activatedRoute.data.subscribe((response) => {
            this.keywords = response['keywords'];
            this.keywordPhrase = this.activatedRoute.snapshot.paramMap.get('keyword-phrase') as string;
            this.getKeywordPhraseResults();
        });
    }

    private getKeywordPhraseResults() {
        this.loadScientists();
        this.loadEquipment();
        this.loadSpecificKnowledge();
        this.loadCompanies();
        this.loadJobOffers();
        this.loadCompanyResearchProblems();
        this.loadProducts();
        this.loadOrganizations();
        this.loadOrganizationResearchProblems();
        this.loadFinancingSources();
    }

    sendKeywordPhrase(): void{
        if(!this.keywordPhrase){
            this.notificationService
                .showNotification(NotificationType.Warning, 'correct-validation-errors');
            return;
        }

        this.router.navigateByUrl('/keyword-search/' + this.keywordPhrase).then();
    }

    private loadScientists(): void {
        this.publicService.sendKeywordPhrase(this.keywords, EntityType.Scientist)
            .subscribe((response: any) => {
                this.scientists = response.map((x: Scientist) =>
                    Object.assign(new Scientist(), x)
                );

                this.areScientistsLoading = false;
            });
    }

    private loadEquipment(): void {
        this.publicService.sendKeywordPhrase(this.keywords, EntityType.Equipment, EntityType.Scientist)
            .subscribe((response: any) => {
                this.equipment = response.map((x: Equipment) =>
                    Object.assign(new Equipment(), x)
                );

                this.areEquipmentLoading = false;
            });
    }

    private loadSpecificKnowledge(): void {
        this.publicService.sendKeywordPhrase(this.keywords, EntityType.SpecificKnowledge, EntityType.Scientist)
            .subscribe((response: any) => {
                this.specificKnowledge = response.map((x: SpecificKnowledge) =>
                    Object.assign(new SpecificKnowledge(), x)
                );

                this.areSpecificKnowledgeLoading = false;
            });
    }

    private loadCompanies(): void {
        this.publicService.sendKeywordPhrase(this.keywords, EntityType.Company)
            .subscribe((response: any) => {
                this.companies = response.map((x: Company) =>
                    Object.assign(new Company(), x)
                );

                this.areCompaniesLoading = false;
            });
    }

    private loadJobOffers(): void {
        this.publicService.sendKeywordPhrase(this.keywords, EntityType.JobOffer, EntityType.Company)
            .subscribe((response: any) => {
                this.jobOffers = response.map((x: JobOffer) =>
                    Object.assign(new JobOffer(), x)
                );

                this.areJobOffersLoading = false;
            });
    }

    private loadCompanyResearchProblems(): void {
        this.publicService.sendKeywordPhrase(this.keywords, EntityType.ResearchProblem, EntityType.Company)
            .subscribe((response: any) => {
                this.companyResearchProblems = response.map((x: ResearchProblem) =>
                    Object.assign(new ResearchProblem(), x)
                );

                this.areCompanyResearchProblemsLoading = false;
            });
    }

    private loadProducts(): void {
        this.publicService.sendKeywordPhrase(this.keywords, EntityType.Product, EntityType.Company)
            .subscribe((response: any) => {
                this.products = response.map((x: Product) =>
                    Object.assign(new Product(), x)
                );

                this.areProductsLoading = false;
            });
    }

    private loadOrganizations(): void {
        this.publicService.sendKeywordPhrase(this.keywords, EntityType.PublicOrganization)
            .subscribe((response: any) => {
                this.scientists = response.map((x: Organization) =>
                    Object.assign(new Organization(), x)
                );

                this.areOrganizationsLoading = false;
            });
    }

    private loadOrganizationResearchProblems(): void {
        this.publicService.sendKeywordPhrase(this.keywords, EntityType.ResearchProblem,
            EntityType.PublicOrganization)
            .subscribe((response: any) => {
                this.organizationResearchProblems = response.map((x: ResearchProblem) =>
                    Object.assign(new ResearchProblem(), x)
                );

                this.areOrganizationResearchProblemsLoading = false;
            });
    }

    private loadFinancingSources(): void {
        this.publicService.sendKeywordPhrase(this.keywords, EntityType.FinancingSource)
            .subscribe((response: any) => {
                this.financingSources = response.map((x: FinancingSource) =>
                    Object.assign(new FinancingSource(), x)
                );

                this.areFinancingSourcesLoading = false;
            });
    }
}
