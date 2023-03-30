import {Component, Input} from '@angular/core';
import {Organization} from '../../core/models/organization';
import {EntityType} from '../../../auth/core/enums/entity-type';
import {FormType} from "../../../shared/enums/form-type";

@Component({
    selector: 'organization-form',
    templateUrl: './organization-form.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform: scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `],
    styleUrls: ['./organization-form.component.scss']
})
export class OrganizationFormComponent {
    @Input() organization!: Organization;
    @Input() returnUrl!: string;
    @Input() formType!: FormType;

    entityType = EntityType.PublicOrganization;

    constructor() {}
}
