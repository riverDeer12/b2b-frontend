import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {ConfirmationComponent} from "../components/confirmation/confirmation.component";
import {DialogService} from "primeng/dynamicdialog";

export interface PendingChangesComponent {
    pendingChanges: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class PendingChangesGuard implements CanDeactivate<PendingChangesComponent> {
    constructor(private dialogService: DialogService, private translateService: TranslateService) {}

    async canDeactivate(
        component: PendingChangesComponent,
        _currentRoute: ActivatedRouteSnapshot,
        _currentState: RouterStateSnapshot,
        _nextState?: RouterStateSnapshot
    ): Promise<boolean> {
        if (!component.pendingChanges) {
            return true;
        }

        return this.callConfirmDialog();
    }

    async callConfirmDialog(): Promise<boolean> {
        let dialogText = '';

        this.translateService
            .get('parties.form.general.messages.pending-changes.description')
            .subscribe((resource: string) => {
                dialogText = resource;
            });

        return await this.openConfirmDiscardChangesDialog();
    }

    openConfirmDiscardChangesDialog(): Promise<boolean> {
        return new Promise((resolve) => {
            const confirmDiscardChanges = this.dialogService.open(ConfirmationComponent, {
                data: {
                    header: 'pending-changes.title',
                    description: 'pending-changes.description'
                }
            });

            confirmDiscardChanges.onClose.subscribe((isConfirmed: boolean) => {
                resolve(isConfirmed);
            });
        });
    }
}
