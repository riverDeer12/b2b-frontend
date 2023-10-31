import {Component} from '@angular/core';
import {Category} from '../../../../categories/core/models/category';
import {EntityType} from '../../../../auth/core/enums/entity-type';
import {FormType} from '../../../../shared/enums/form-type';
import {ActivatedRoute} from '@angular/router';
import {Scientist} from '../../../../scientists/core/models/scientist';
import {Company} from 'src/app/companies/core/models/company';
import {Organization} from 'src/app/organizations/core/models/organization';

@Component({
    selector: 'my-profile',
    templateUrl: './my-profile.component.html',
    styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent {
    profileEntityType!: EntityType;
    entity!: any;
    categories!: Category[];

    returnUrl = '/my-profile';

    public get formType(): typeof FormType {
        return FormType;
    }

    public get entityType(): typeof EntityType {
        return EntityType;
    }

    constructor(private activatedRoute: ActivatedRoute) {
        this.listenToResolver();
    }

    private listenToResolver(): void {
        this.activatedRoute.data.subscribe((response) => {

            this.profileEntityType = response['entityType'] as EntityType;

            switch (this.profileEntityType) {
                case EntityType.Company:
                    this.entity = Object.assign(new Company(), response['entity']);
                    break;
                case EntityType.PublicOrganization:
                    this.entity = Object.assign(new Organization(), response['entity']);
                    break;
                case EntityType.Scientist:
                    this.entity = Object.assign(new Scientist(), response['entity']);
                    break;
            }


        });
    }

}
