import {Component} from '@angular/core';
import {FormType} from '../../../shared/enums/form-type';
import {Category} from '../../../categories/core/models/category';
import {ActivatedRoute} from '@angular/router';
import {SharedService} from "../../../shared/services/shared.service";
import {PendingChangesComponent} from "../../../shared/guards/pending-changes.guard";

@Component({
    selector: 'company-create',
    templateUrl: './company-create.component.html',
    styleUrls: ['./company-create.component.scss']
})
export class CompanyCreateComponent implements PendingChangesComponent{

    formType = FormType.Create;

    returnUrl = '/admin/companies';

    categories!: Category[];

    pendingChanges!: boolean;

    constructor(private activatedRoute: ActivatedRoute,
                private sharedService: SharedService) {
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
            this.categories = response['categories'].map((x: Category) =>
                Object.assign(new Category(), x)
            );
        });
    }


}
