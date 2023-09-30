import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LayoutService} from 'src/app/layout/admin/core/services/app.layout.service';
import {TranslateService} from '@ngx-translate/core';
import {News} from "../../../../news/core/models/news";
import {ResearchProblem} from "../../../../research-problems/core/models/research-problem";
import {Company} from "../../../../companies/core/models/company";
import {Scientist} from "../../../../scientists/core/models/scientist";
import {Organization} from "../../../../organizations/core/models/organization";
import {Equipment} from "../../../../equipment/core/models/equipment";

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit{
    latestNews!: News[];
    latestCompanyResearchProblems!: ResearchProblem[];
    latestOrganizationResearchProblems!: ResearchProblem[];
    latestCompanies!: Company[];
    latestScientists!: Scientist[];
    latestOrganizations!: Organization[];
    latestEquipment!: Equipment[];

    constructor(private translateService: TranslateService,
                public layoutService: LayoutService,
                public router: Router,
                private activatedRoute: ActivatedRoute) {
        this.listenToResolver();
    }


    ngOnInit(): void {
        this.translateService.use('hr');
    }

    /**
     * Assign resolver data.
     */
    listenToResolver() {
        this.activatedRoute.data.subscribe((response) => {

            this.latestNews = response['latestNews'].map((x: News) =>
                Object.assign(new News(), x)
            );

            this.latestCompanyResearchProblems = response['latestCompanyResearchProblems'].map((x: News) =>
                Object.assign(new News(), x)
            );

            this.latestOrganizationResearchProblems = response['latestOrganizationResearchProblems'].map((x: News) =>
                Object.assign(new News(), x)
            );

            this.latestCompanies = response['latestCompanies'].map((x: News) =>
                Object.assign(new News(), x)
            );

            this.latestScientists = response['latestScientists'].map((x: News) =>
                Object.assign(new News(), x)
            );

            this.latestOrganizations = response['latestOrganizations'].map((x: News) =>
                Object.assign(new News(), x)
            );

            this.latestEquipment = response['latestEquipment'].map((x: News) =>
                Object.assign(new News(), x)
            );
        });
    }

}
