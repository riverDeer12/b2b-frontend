import {Component} from '@angular/core';
import {FormType} from '../../../shared/enums/form-type';
import {TranslateService} from '@ngx-translate/core';
import {ActivatedRoute} from '@angular/router';
import {Organization} from '../../core/models/organization';

@Component({
    selector: 'organization-edit',
    templateUrl: './organization-edit.component.html',
    styleUrls: ['./organization-edit.component.scss']
})
export class OrganizationEditComponent {
    returnUrl = '/admin/organizations';

    formType = FormType.Edit;

    organization!: Organization;

    constructor(private translateService: TranslateService, private activatedRoute: ActivatedRoute) {
        this.listenToResolver();
    }

    ngOnInit(): void {
    }

    private listenToResolver() {
        this.activatedRoute.data.subscribe((response) => {
            this.organization = Object.assign(new Organization(), response['organization']);
        });
    }
}
