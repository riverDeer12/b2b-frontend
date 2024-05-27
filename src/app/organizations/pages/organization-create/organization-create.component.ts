import { Component } from '@angular/core';
import {FormType} from '../../../shared/enums/form-type';
import {PendingChangesComponent} from "../../../shared/guards/pending-changes.guard";
import {SharedService} from "../../../shared/services/shared.service";

@Component({
  selector: 'organization-create',
  templateUrl: './organization-create.component.html',
  styleUrls: ['./organization-create.component.scss']
})
export class OrganizationCreateComponent implements PendingChangesComponent{
    returnUrl = '/admin/organizations';
    formType = FormType.Create;

    pendingChanges!: boolean;

    constructor(private sharedService: SharedService) {
    }

    ngOnInit(): void {
        this.listenToPendingChanges();
    }

    private listenToPendingChanges(): void {
        this.sharedService.getPendingChangesStatus().subscribe((pendingChanges: boolean) => {
            this.pendingChanges = pendingChanges;
        });
    }
}
