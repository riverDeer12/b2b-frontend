import {Component, Input, OnInit} from '@angular/core';
import {EntityType} from "../../../auth/core/enums/entity-type";
import {OrganizationService} from "../../../organizations/core/services/organization.service";
import {CompanyService} from "../../../companies/core/services/company.service";
import {ScientistService} from "../../../scientists/core/services/scientist.service";
import {Organization} from "../../../organizations/core/models/organization";
import {Company} from "../../../companies/core/models/company";
import {Scientist} from "../../../scientists/core/models/scientist";
import {FormGroup} from "@angular/forms";

@Component({
    selector: 'entity-selector',
    templateUrl: './entity-selector.component.html',
    styleUrls: ['./entity-selector.component.scss']
})
export class EntitySelectorComponent implements OnInit {
    @Input() entityType!: EntityType;
    @Input() formGroup!: FormGroup;
    @Input() controlName!: string;
    @Input() label!: string;
    @Input() placeholder!: string;
    @Input() optionLabel!: string;
    @Input() isDisabled!: boolean;

    entities!: any[];

    loadingData!: boolean;

    constructor(private organizationService: OrganizationService,
                private companyService: CompanyService,
                private scientistService: ScientistService) {
    }

    ngOnInit(): void {
        this.setEntities();
    }

    private setEntities(): void {
        switch (this.entityType) {
            case EntityType.PublicOrganization:
                this.getPublicOrganizations();
                break;
            case EntityType.Company:
                this.getCompanies();
                break;
            case EntityType.Scientist:
                this.getScientists();
                break;
        }
    }

    private getPublicOrganizations() {
        this.organizationService.getOrganizations()
            .subscribe((response: Organization[]) => {
                this.entities = response.map((x: Organization) =>
                    Object.assign(new Organization(), x)
                );
            })
    }

    private getScientists() {
        this.scientistService.getScientists()
            .subscribe((response: Scientist[]) => {
                this.entities = response.map((x: Scientist) =>
                    Object.assign(new Scientist(), x)
                );
            })
    }

    private getCompanies() {
        this.companyService.getCompanies()
            .subscribe((response: Company[]) => {
                this.entities = response.map((x: Company) =>
                    Object.assign(new Company(), x)
                );
            })
    }
}
