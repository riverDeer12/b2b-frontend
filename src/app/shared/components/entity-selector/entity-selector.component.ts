import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {EntityType} from "../../../auth/core/enums/entity-type";
import {CompanyService} from "../../../companies/core/services/company.service";
import {OrganizationService} from "../../../organizations/core/services/organization.service";
import {Company} from "../../../companies/core/models/company";
import {Organization} from "../../../organizations/core/models/organization";
import {SharedService} from "../../services/shared.service";

@Component({
    selector: 'entity-selector',
    templateUrl: './entity-selector.component.html',
    styleUrls: ['./entity-selector.component.scss']
})
export class EntitySelectorComponent {
    @Input() entityType!: EntityType;
    @Input() formName!: FormGroup;
    @Input() controlName!: string;
    @Input() label!: string;

    data: any[] = [];

    filteredData: any[] = [];

    constructor(private companyService: CompanyService,
                private sharedService: SharedService,
                private organizationService: OrganizationService) {
        this.setChangesListener();
    }

    ngOnInit(): void {
        this.loadEntities();
    }

    /**
     * Subscribe to
     * listener that checks
     * if entity type is changed.
     */
    setChangesListener(): void {
        this.sharedService.getParentEntityType()
            .subscribe((response: EntityType) => {
            this.entityType = response;
            this.loadEntities();
        })
    }

    /**
     * Main method for
     * loading entities into
     * selector.
     */
    loadEntities(): void {
        switch (this.entityType) {
            case EntityType.Company:
                this.loadCompanies();
                return;
            case EntityType.PublicOrganization:
                this.loadOrganizations();
                return;
            default:
                return;
        }
    }

    /**
     * Load companies into
     * entities data.
     */
    private loadCompanies(): void {
        this.companyService.getCompanies().subscribe((response: Company[]) => {
            this.data = response.map((x: Company) =>
                Object.assign(new Company(), x)
            );
        })
    }

    /**
     * Load organizations into
     * entities data.
     */
    private loadOrganizations(): void {
        this.organizationService.getOrganizations().subscribe((response: Organization[]) => {
            this.data = response.map((x: Organization) =>
                Object.assign(new Organization(), x)
            );
        })
    }
}
