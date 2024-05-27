import {Component} from '@angular/core';
import {FormType} from '../../../shared/enums/form-type';
import {TranslateService} from '@ngx-translate/core';
import {ActivatedRoute} from '@angular/router';
import {Organization} from '../../core/models/organization';
import {ResearchProblem} from "../../../research-problems/core/models/research-problem";
import {Category} from '../../../categories/core/models/category';
import {PendingChangesComponent} from "../../../shared/guards/pending-changes.guard";
import {SharedService} from "../../../shared/services/shared.service";

@Component({
    selector: 'organization-edit',
    templateUrl: './organization-edit.component.html',
    styleUrls: ['./organization-edit.component.scss']
})
export class OrganizationEditComponent implements PendingChangesComponent {
    returnUrl = '/admin/organizations';
    formType = FormType.Edit;
    organization!: Organization;
    researchProblems!: ResearchProblem[];
    categories!: Category[];

    pendingChanges!: boolean;

    constructor(private translateService: TranslateService,
                private sharedService: SharedService,
                private activatedRoute: ActivatedRoute) {
        this.listenToResolver();
    }

    ngOnInit(): void {
        this.listenToPendingChanges();
    }

    private listenToPendingChanges(): void {
        this.sharedService.getPendingChangesStatus().subscribe((pendingChanges: boolean) => {
            this.pendingChanges = pendingChanges;
        });
    }

    private listenToResolver() {
        this.activatedRoute.data.subscribe((response) => {
            this.organization = Object.assign(new Organization(), response['organization']);
            this.categories = response["categories"].map((x: Category) =>
                Object.assign(new Category(), x)
            );
            this.researchProblems = response["researchProblems"].map((x: ResearchProblem) =>
                Object.assign(new ResearchProblem(), x)
            );
        });
    }
}
