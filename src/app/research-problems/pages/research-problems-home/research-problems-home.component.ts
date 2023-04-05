import { Component } from '@angular/core';
import {ResearchProblem} from "../../core/models/research-problem";
import {TranslateService} from "@ngx-translate/core";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'research-problems-home',
  templateUrl: './research-problems-home.component.html',
  styleUrls: ['./research-problems-home.component.scss']
})
export class ResearchProblemsHomeComponent {
    researchProblems: ResearchProblem[] = [];

    constructor(private translateService: TranslateService, private activatedRoute: ActivatedRoute) {
        // this.listenToResolver();
    }

    ngOnInit(): void {
    }

    private listenToResolver() {
        this.activatedRoute.data.subscribe((response) => {
            this.researchProblems = response['researchProblems'].map((x: ResearchProblem) =>
                Object.assign(new ResearchProblem(), x)
            );
        });
    }
}
