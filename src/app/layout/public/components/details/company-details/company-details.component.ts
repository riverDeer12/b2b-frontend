import {Component, Input, OnInit} from '@angular/core';
import {Company} from '../../../../../companies/core/models/company';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit{
    @Input() company!: Company;

    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.listenToResolver();
    }

    private listenToResolver() {
        this.activatedRoute.data.subscribe((response) => {
            this.company = Object.assign(new Company(), response["company"]);
        });
    }
}
