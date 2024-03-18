import {Component, Input} from '@angular/core';
import {FormType} from '../../../shared/enums/form-type';
import {Company} from '../../core/models/company';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NotificationService} from '../../../shared/services/notification.service';
import {CompanyService} from '../../core/services/company.service';
import {NotificationType} from '../../../shared/enums/notification-type';
import {ValidationService} from '../../../shared/services/validation.service';
import {EntityType} from '../../../auth/core/enums/entity-type';
import {Category} from '../../../categories/core/models/category';

@Component({
    selector: 'company-general-form',
    templateUrl: './company-general-form.component.html',
    styleUrls: ['./company-general-form.component.scss']
})
export class CompanyGeneralFormComponent {
    @Input() formType!: FormType;
    @Input() company!: Company;
    @Input() returnUrl!: string;
    @Input() categories!: Category[];

    isLoading: boolean = false;

    form!: FormGroup;

    entityType = EntityType.Company;

    public get type(): typeof FormType {
        return FormType;
    }

    constructor(
        public validationService: ValidationService,
        private fb: FormBuilder,
        private router: Router,
        private notificationService: NotificationService,
        private companyService: CompanyService) {
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
            projects: this.fb.group({
                translations: this.fb.group({
                    HR: new FormControl('', Validators.required),
                    EN: new FormControl('', Validators.required)
                })
            }),
            address: new FormControl('', Validators.required),
            email: new FormControl('', Validators.required),
            taxCode: new FormControl('', Validators.required),
            website: new FormControl('', Validators.required),
            numberOfEmployees: new FormControl('', Validators.required),
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
            name: new FormControl(this.company.name, Validators.required),
            description: this.fb.group({
                translations: this.fb.group({
                    HR: new FormControl(this.company.description.translations.HR, Validators.required),
                    EN: new FormControl(this.company.description.translations.EN, Validators.required)
                })
            }),
            projects: this.fb.group({
                translations: this.fb.group({
                    HR: new FormControl(this.company.projects.translations.HR, Validators.required),
                    EN: new FormControl(this.company.projects.translations.EN, Validators.required)
                })
            }),
            address: new FormControl(this.company.address, Validators.required),
            email: new FormControl(this.company.email, Validators.required),
            taxCode: new FormControl(this.company.taxCode, Validators.required),
            website: new FormControl(this.company.website, Validators.required),
            numberOfEmployees: new FormControl(this.company.numberOfEmployees, Validators.required),
            newsletterCategories: new FormControl(this.company.newsletterCategories.map(x => x.id), Validators.required),
            categories: new FormControl(this.company.categories.map(x => x.id), Validators.required),
            categoryTags: new FormControl(this.company.categoryTags.split(";").slice(0,-1), Validators.required)
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
            this.createCompany() :
            this.editCompany();
    }

    /**
     * Connecting to category
     * service and sending form data to
     * create new category.
     */
    private createCompany(): void {
        this.companyService.createCompany(this.form.value).subscribe(() => {
                this.notificationService
                    .showNotification(NotificationType.Success,
                        'companies.successfully-created');

                this.router.navigateByUrl(this.returnUrl).then();

                this.isLoading = false;
            },
            (error) => {
                this.notificationService
                    .showNotification(NotificationType.Error,
                        'correct-validation-errors');

                this.isLoading = false;
            })
    }

    /**
     * Connecting to category
     * service and sending form data to
     * updated selected category.
     */
    private editCompany(): void {
        this.companyService.editCompany(this.company.id, this.form.value).subscribe(() => {
                this.notificationService
                    .showNotification(NotificationType.Success,
                        'companies.successfully-updated');

                this.router.navigateByUrl(this.returnUrl).then();

                this.isLoading = false;
            },
            (error) => {
                this.notificationService
                    .showNotification(NotificationType.Error,
                        'correct-validation-errors');

                this.isLoading = false;
            })
    }
}
