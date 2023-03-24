import {Component, OnInit} from '@angular/core';

import {TranslateService} from '@ngx-translate/core';
import {ActivatedRoute} from '@angular/router';
import {Company} from '../../core/models/company';

@Component({
  selector: 'companies-home',
  templateUrl: './companies-home.component.html',
  styleUrls: ['./companies-home.component.css']
})
export class CompaniesHomeComponent implements OnInit {

    companies: Company[] = [];

    constructor(private translateService: TranslateService, private activatedRoute: ActivatedRoute) {
        this.listenToResolver();
    }

    ngOnInit(): void {
    }

    private listenToResolver() {
        this.activatedRoute.data.subscribe((response) => {
            this.companies = response['companies'].map((x: Company) =>
                Object.assign(new Company(), x)
            );
        });
    }
}
