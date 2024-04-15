import {Component, Input} from '@angular/core';
import {FormType} from "../../../shared/enums/form-type";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {NotificationType} from "../../../shared/enums/notification-type";
import {Organization} from "../../core/models/organization";
import {NotificationService} from "../../../shared/services/notification.service";
import {OrganizationService} from "../../core/services/organization.service";
import {Router} from "@angular/router";
import {Category} from '../../../categories/core/models/category';
import {ValidationService} from "../../../shared/services/validation.service";
import {EntityType} from '../../../auth/core/enums/entity-type';

@Component({
    selector: 'organization-general-form',
    templateUrl: './organization-general-form.component.html',
    styleUrls: ['./organization-general-form.component.scss']
})
export class OrganizationGeneralFormComponent {
    @Input() formType!: FormType;
    @Input() organization!: Organization;
    @Input() categories!: Category[];
    @Input() returnUrl!: string;

    isLoading: boolean = false;

    form!: FormGroup;

    entityType = EntityType.PublicOrganization;

    public get type(): typeof FormType {
        return FormType;
    }

    constructor(
        public validationService: ValidationService,
        private fb: FormBuilder,
        private router: Router,
        private organizationService: OrganizationService,
        private notificationService: NotificationService) {
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
            description: this.fb.group({
                translations: this.fb.group({
                    HR: new FormControl('', Validators.required),
                    EN: new FormControl('', Validators.required)
                })
            }),
            address: new FormControl('', Validators.required),
            email: new FormControl('', Validators.required),
            website: new FormControl('', Validators.required),
            newsletterCategories: new FormControl('', Validators.required),
            categories: new FormControl('', Validators.required),
            categoryTags: new FormControl('', Validators.required)
        })
    }

    /**
     * Initializes form if
     * edit form action is triggered.
     */
    private initEditForm(): void {
        this.form = this.fb.group({
            name: new FormControl(this.organization.name, Validators.required),
            description: this.fb.group({
                translations: this.fb.group({
                    HR: new FormControl(this.organization.description.translations.HR, Validators.required),
                    EN: new FormControl(this.organization.description.translations.EN, Validators.required)
                })
            }),
            address: new FormControl(this.organization.address, Validators.required),
            email: new FormControl(this.organization.email, Validators.required),
            website: new FormControl(this.organization.website, Validators.required),
            newsletterCategories: new FormControl(this.organization.newsletterCategories.map(x => x.id), Validators.required),
            categories: new FormControl(this.organization.categories.map(x => x.id), Validators.required),
            categoryTags: new FormControl(this.organization.categoryTags.split(";").slice(0,-1), Validators.required)
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
                    'correct-validation-errors-with-translations');
            this.isLoading = false;
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
                        'organizations.successfully-created');

                this.router.navigateByUrl(this.returnUrl).then();

                this.isLoading = false;
            },
            error => {
                this.notificationService
                    .showNotification(NotificationType.Error,
                        'correct-validation-errors-with-translations');

                this.isLoading = false;
            })
    }

    /**
     * Connecting to organization
     * service and sending form data to
     * updated selected organization.
     */
    private editOrganization(): void {
        this.organizationService
            .editOrganization(this.organization.id, this.form.value).subscribe(() => {
            this.notificationService
                .showNotification(NotificationType.Success,
                    'organizations.successfully-updated');

            this.router.navigateByUrl(this.returnUrl).then();

            this.isLoading = false;

        }, () => {
            this.notificationService
                .showNotification(NotificationType.Error,
                    'correct-validation-errors-with-translations');

            this.isLoading = false;
        })
    }
}
