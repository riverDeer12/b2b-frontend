import {Component} from '@angular/core';
import {FormType} from '../../../shared/enums/form-type';
import {PendingChangesComponent} from "../../../shared/guards/pending-changes.guard";
import {SharedService} from "../../../shared/services/shared.service";

@Component({
    selector: 'scientist-create',
    templateUrl: './scientist-create.component.html',
    styleUrls: ['./scientist-create.component.scss']
})
export class ScientistCreateComponent implements PendingChangesComponent {
    returnUrl = '/admin/scientist';

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
