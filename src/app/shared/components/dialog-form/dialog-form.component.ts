import { Component } from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {TranslateService} from '@ngx-translate/core';
import {DialogFormContentType} from '../../enums/dialog-form-content-type';
import {FormType} from '../../enums/form-type';
import {SharedService} from '../../services/shared.service';
import {DialogFormConfig} from '../../constants/dialog-form-config';
import {DialogFormContent} from '../../models/dialog-form-content';
import {EntityType} from '../../../auth/core/enums/entity-type';
import {Category} from '../../../categories/core/models/category';

@Component({
  selector: 'dialog-form',
  templateUrl: './dialog-form.component.html',
  styleUrls: ['./dialog-form.component.scss']
})
export class DialogFormComponent {
    contentType!: DialogFormContent;
    dialogId!: string;
    data: any;
    dataArray!: any[];
    formType!: FormType;
    parentEntityId!: string;
    parentEntityType!: EntityType;
    categories!: Category[];

    constructor(private dialogRef: DynamicDialogRef,
                private sharedService: SharedService,
                private dialogConfig: DynamicDialogConfig,
                private translateService: TranslateService) {
        this.initSettings();
        this.setCloseModalListener();
    }


    public get dialogFormContentType(): typeof DialogFormContentType {
        return DialogFormContentType;
    }

    ngOnInit(): void {
        //intended
    }

    /**
     * Set dialog settings.
     */
    initSettings(): void {
        this.dialogConfig.autoZIndex = DialogFormConfig.autoZIndex;
        this.dialogConfig.dismissableMask = DialogFormConfig.dismissableMask;
        this.dialogConfig.closeOnEscape = DialogFormConfig.closeOnEscape;
        this.dialogConfig.transitionOptions = DialogFormConfig.transitionOptions;
        this.dialogConfig.style = DialogFormConfig.style;
        this.initHeader();
        this.initContentType();
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
     * Set popup content type.
     */
    initContentType(): void {
        this.contentType = this.dialogConfig.data.contentType;
        this.formType = this.dialogConfig.data.formType;
        this.data = this.dialogConfig.data.data;
        this.dataArray = this.dialogConfig.data.dataArray
        this.parentEntityId = this.dialogConfig.data.parentEntityId;
        this.parentEntityType = this.dialogConfig.data.parentEntityType;
        this.categories = this.dialogConfig.data.categories;
    }

    /**
     * Set listener for
     * close modal trigger changes.
     */
    setCloseModalListener(): void {
        this.sharedService.getModalCloseStatus().subscribe((response: string) => {
            if (this.contentType.dialogId === response as string) {
                this.dialogRef.close(response);
            }
        })
    }
}
