import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LayoutService} from 'src/app/layout/admin/core/services/app.layout.service';
import {News} from "../../../../news/core/models/news";
import {ResearchProblem} from "../../../../research-problems/core/models/research-problem";
import {Company} from "../../../../companies/core/models/company";
import {Scientist} from "../../../../scientists/core/models/scientist";
import {Organization} from "../../../../organizations/core/models/organization";
import {Equipment} from "../../../../equipment/core/models/equipment";
import {FormBuilder} from "@angular/forms";
import {NotificationType} from "../../../../shared/enums/notification-type";
import {NotificationService} from "../../../../shared/services/notification.service";

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
    latestNews!: News[];
    latestCompanyResearchProblems!: ResearchProblem[];
    latestOrganizationResearchProblems!: ResearchProblem[];
    latestCompanies!: Company[];
    latestScientists!: Scientist[];
    latestOrganizations!: Organization[];
    latestEquipment!: Equipment[];

    keywordPhrase!: string;

    constructor(private fb: FormBuilder,
                public layoutService: LayoutService,
                public router: Router,
                private notificationService: NotificationService,
                private activatedRoute: ActivatedRoute) {
        this.listenToResolver();
    }


    ngOnInit(): void {
    }

    /**
     * Assign resolver data.
     */
    listenToResolver() {
        this.activatedRoute.data.subscribe((response) => {

            this.latestNews = response['latestNews'].map((x: News) =>
                Object.assign(new News(), x)
            );

            this.latestCompanyResearchProblems = response['latestCompanyResearchProblems']
                .map((x: ResearchProblem) =>
                    Object.assign(new ResearchProblem(), x)
                );

            this.latestOrganizationResearchProblems = response['latestOrganizationResearchProblems']
                .map((x: ResearchProblem) =>
                    Object.assign(new ResearchProblem(), x)
                );

            this.latestCompanies = response['latestCompanies'].map((x: Company) =>
                Object.assign(new Company(), x)
            );

            this.latestScientists = response['latestScientists'].map((x: Scientist) =>
                Object.assign(new Scientist(), x)
            );

            this.latestOrganizations = response['latestOrganizations'].map((x: Organization) =>
                Object.assign(new Organization(), x)
            );

            this.latestEquipment = response['latestEquipment'].map((x: Equipment) =>
                Object.assign(new Equipment(), x)
            );
        });
    }

    sendKeywordPhrase(): void{
        if(!this.keywordPhrase){
            this.notificationService
                .showNotification(NotificationType.Warning, 'correct-validation-errors');
            return;
        }

        this.router.navigateByUrl('/keyword-search/' + this.keywordPhrase).then();
    }

}
