import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {ActivatedRoute} from '@angular/router';
import {News} from '../../../news/core/models/news';
import {SpecificKnowledge} from "../../core/models/specific-knowledge";

@Component({
  selector: 'specific-knowledge-home',
  templateUrl: './specific-knowledge-home.component.html',
  styleUrls: ['./specific-knowledge-home.component.css']
})
export class SpecificKnowledgeHomeComponent implements OnInit {
    specificKnowledge: SpecificKnowledge[] = [];

    constructor(private translateService: TranslateService, private activatedRoute: ActivatedRoute) {
        this.listenToResolver();
    }

    ngOnInit(): void {
        this.translateService.use('hr')
    }

    private listenToResolver() {
        this.activatedRoute.data.subscribe((response) => {
            this.specificKnowledge = response['specific-knowledge'].map((x: News) =>
                Object.assign(new SpecificKnowledge(), x)
            );
        });
    }

}
