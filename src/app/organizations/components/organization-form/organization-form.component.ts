import {Component, Input} from '@angular/core';
import {FormType} from '../../../shared/enums/form-type';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NotificationService} from '../../../shared/services/notification.service';
import {NotificationType} from '../../../shared/enums/notification-type';
import {Organization} from '../../core/models/organization';
import {OrganizationService} from '../../core/services/organization.service';

@Component({
    selector: 'organization-form',
    templateUrl: './organization-form.component.html',
    styleUrls: ['./organization-form.component.scss']
})
export class OrganizationFormComponent {
    @Input() formType!: FormType;
    @Input() organization!: Organization;
    @Input() returnUrl!: string;

    form!: FormGroup;

    constructor(private fb: FormBuilder,
                private router: Router,
                private notificationService: NotificationService,
                private organizationService: OrganizationService) {
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
            name: new FormControl('', Validators.required),
            description: new FormControl('', Validators.required),
            address: new FormControl('', Validators.required),
            email: new FormControl('', Validators.required),
            website: new FormControl('', Validators.required)
        })
    }

    /**
     * Initializes form if
     * edit form action is triggered.
     */
    private initEditForm(): void {
        this.form = this.fb.group({
            name: new FormControl(this.organization.name, Validators.required),
            description: new FormControl(this.organization.description, Validators.required),
            address: new FormControl(this.organization.address, Validators.required),
            email: new FormControl(this.organization.email, Validators.required),
            website: new FormControl(this.organization.website, Validators.required)
        })
    }

    /**
     * Method that is triggered
     * by clicking submit button.
     */
    submit(): void {
        if (this.form.invalid) {
            this.notificationService
                .showNotification(NotificationType.Error,
                    'correct-validation-errors');
            return;
        }

        this.formType === FormType.Create ?
            this.createOrganization() :
            this.editOrganization();
    }

    /**
     * Connecting to organization
     * service and sending form data to
     * create new organization.
     */
    private createOrganization(): void {
        this.organizationService.createOrganization(this.form.value).subscribe(() => {
                this.notificationService
                    .showNotification(NotificationType.Success,
                        'organization-successfully-created');

                this.router.navigateByUrl(this.returnUrl).then();
            },
            error => {
                this.notificationService
                    .showNotification(NotificationType.Error,
                        'correct-validation-errors');
            })
    }

    /**
     * Connecting to organization
     * service and sending form data to
     * updated selected organization.
     */
    private editOrganization(): void {
        this.organizationService.editOrganization(this.organization.id, this.form.value).subscribe(() => {
            this.notificationService
                .showNotification(NotificationType.Success,
                    'organization-successfully-updated');

            this.router.navigateByUrl(this.returnUrl).then();
        }, error => {
            this.notificationService
                .showNotification(NotificationType.Error,
                    'correct-validation-errors');
        })
    }
}
