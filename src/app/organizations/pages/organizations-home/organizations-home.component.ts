import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Company} from '../../../companies/core/models/company';
import {TranslateService} from '@ngx-translate/core';
import {ActivatedRoute} from '@angular/router';
import {Organization} from '../../core/models/organization';

@Component({
    selector: 'organizations-home',
    templateUrl: './organizations-home.component.html',
    styleUrls: ['./organizations-home.component.css']
})
export class OrganizationsHomeComponent implements OnInit {
    organizations: Organization[] = [];

    constructor(private translateService: TranslateService, private activatedRoute: ActivatedRoute) {
        this.listenToResolver();
    }

    ngOnInit(): void {
    }

    private listenToResolver() {
        this.activatedRoute.data.subscribe((response) => {
            this.organizations = response['organizations'].map((x: Organization) =>
                Object.assign(new Organization(), x)
            );
        });
    }
}
