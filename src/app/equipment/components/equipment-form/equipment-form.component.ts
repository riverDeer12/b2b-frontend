import {Component, Input} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FormType} from '../../../shared/enums/form-type';
import {EquipmentService} from '../../core/services/equipment.service';
import {Router} from '@angular/router';
import {NotificationService} from '../../../shared/services/notification.service';
import {NotificationType} from '../../../shared/enums/notification-type';
import {Equipment} from '../../core/models/equipment';
import {RedirectType} from '../../../shared/enums/redirect-type';
import {SharedService} from '../../../shared/services/shared.service';
import {Category} from '../../../categories/core/models/category';
import {ValidationService} from '../../../shared/services/validation.service';
import {EntityType} from '../../../auth/core/enums/entity-type';

/**
 * Component responsible for
 * managing equipment data. It
 * can be defined with different input
 * decorators.
 *
 * @param formType type of form action.
 * @param redirectType type of redirect action.
 * @param companyId id of parent entity.
 * @param equipment data for managing.
 * @param returnUrl url to redirect user after form submit.
 * @param dialogId parent dialog form identifier.
 *
 */
@Component({
    selector: 'equipment-form',
    templateUrl: './equipment-form.component.html',
    styleUrls: ['./equipment-form.component.scss']
})
export class EquipmentFormComponent {
    @Input() formType!: FormType;
    @Input() redirectType!: RedirectType;
    @Input() scientistId!: string;
    @Input() categories!: Category[];
    @Input() equipment!: Equipment;
    @Input() returnUrl!: string;
    @Input() dialogId!: string;

    entityType = EntityType.Equipment;

    isLoading: boolean = false;

    form!: FormGroup;

    public get type(): typeof EntityType {
        return EntityType;
    }

    public get formActionType(): typeof FormType {
        return FormType;
    }

    constructor(
        public validationService: ValidationService,
        private fb: FormBuilder,
        private router: Router,
        private sharedService: SharedService,
        private notificationService: NotificationService,
        private equipmentService: EquipmentService) {
    }

    ngOnInit() {
        this.initFormGroup();
    }

    /**
     * Switch function depending on
     * form action type from input decorator.
     */
    initFormGroup = () => this.formType === FormType.Create ?
        this.initCreateForm() : this.initEditForm();

    /**
     * Initializes form if
     * create form action is triggered.
     */
    private initCreateForm(): void {
        this.form = this.fb.group({
            title: this.fb.group({
                translations: this.fb.group({
                    HR: new FormControl('', Validators.required),
                    EN: new FormControl('', Validators.required)
                })
            }),
            description: this.fb.group({
                translations: this.fb.group({
                    HR: new FormControl('', Validators.required),
                    EN: new FormControl('', Validators.required)
                })
            }),
            categories: new FormControl('', Validators.required)
        })
    }

    /**
     * Initializes form if
     * edit form action is triggered.
     */
    private initEditForm(): void {
        this.form = this.fb.group({
            title: this.fb.group({
                translations: this.fb.group({
                    HR: new FormControl(this.equipment.title.translations.HR, Validators.required),
                    EN: new FormControl(this.equipment.title.translations.EN, Validators.required)
                })
            }),
            description: this.fb.group({
                translations: this.fb.group({
                    HR: new FormControl(this.equipment.description.translations.HR, Validators.required),
                    EN: new FormControl(this.equipment.description.translations.HR, Validators.required)
                })
            }),
            categories: new FormControl(this.equipment.categories.map(x => x.id), Validators.required)
        })
    }

    /**
     * Method that is triggered
     * by clicking submit button.
     */
    submit(): void {
        this.isLoading = true;

        if (this.form.invalid) {
            this.form.markAllAsTouched();
            this.notificationService
                .showNotification(NotificationType.Warning,
                    'correct-validation-errors');
            this.isLoading = false;
            return;
        }

        this.formType === FormType.Create ?
            this.createEquipment() :
            this.editEquipment();
    }

    /**
     * Connecting to equipment
     * service and sending form data to
     * create new equipment.
     */
    private createEquipment(): void {
        this.equipmentService.createEquipment(this.scientistId, this.form.value).subscribe(() => {
                this.notificationService
                    .showNotification(NotificationType.Success,
                        'equipment.successfully-updated');

                this.sharedService.redirectUserAfterSubmit(this.redirectType, this.returnUrl, this.dialogId);

                this.equipmentService.pingEquipment(this.form.value as Equipment);

                this.isLoading = false;
            },
            () => {
                this.notificationService
                    .showNotification(NotificationType.Error,
                        'correct-validation-errors');

                this.isLoading = false;
            })
    }

    /**
     * Connecting to equipment
     * service and sending form data to
     * updated selected equipment.
     */
    private editEquipment(): void {
        this.equipmentService.editEquipment(this.scientistId, this.equipment.id, this.form.value).subscribe(() => {
                this.notificationService
                    .showNotification(NotificationType.Success,
                        'equipment.successfully-updated');

                this.sharedService.redirectUserAfterSubmit(this.redirectType, this.returnUrl, this.dialogId);

                this.equipmentService.pingEquipment(this.form.value as Equipment);

                this.isLoading = false;
            },
            () => {
                this.notificationService
                    .showNotification(NotificationType.Error,
                        'correct-validation-errors');

                this.isLoading = false;
            })
    }
}
