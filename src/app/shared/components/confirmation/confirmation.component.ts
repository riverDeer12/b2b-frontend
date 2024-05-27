import { Component } from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {TranslateService} from "@ngx-translate/core";
import {CONFIRMATION_DIALOG_CONFIG} from "../../constants/confirmation-dialog-config";

@Component({
  selector: 'confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent {
    loadingDescription!: boolean;
    description!: string;

    constructor(
        private dialogRef: DynamicDialogRef,
        private dialogConfig: DynamicDialogConfig,
        private translateService: TranslateService
    ) {
        this.initSettings();
    }

    ngOnInit(): void {
    }

    /**
     * Set dialog settings.
     */
    initSettings(): void {
        this.dialogConfig.autoZIndex = CONFIRMATION_DIALOG_CONFIG.autoZIndex;
        this.dialogConfig.dismissableMask = CONFIRMATION_DIALOG_CONFIG.dismissable;
        this.dialogConfig.closeOnEscape = CONFIRMATION_DIALOG_CONFIG.closeOnEsc;
        this.dialogConfig.transitionOptions = CONFIRMATION_DIALOG_CONFIG.transition;
        this.dialogConfig.style = CONFIRMATION_DIALOG_CONFIG.style;
        this.initHeader();
        this.initDescription();
    }

    /**
     * Set dialog header text.
     */
    initHeader(): void {
        this.translateService.get(this.dialogConfig.data.header).subscribe((resource: string) => {
            this.dialogConfig.header = resource;
        });
    }

    /**
     * Set dialog description.
     */
    initDescription() {
        this.loadingDescription = true;
        this.translateService
            .get(this.dialogConfig.data.description)
            .subscribe((resource: string) => {
                this.description = resource;
                this.loadingDescription = false;
            });
    }

    /**
     * Method that triggers
     * confirm result to parent
     * component that invoked confirmation.
     */
    confirm(): void {
        this.dialogRef.close(true);
    }

    /**
     * Method that triggers
     * reject result to parent
     * component that invoked confirmation.
     */
    reject() {
        this.dialogRef.close(false);
    }
}
