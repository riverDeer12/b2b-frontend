import {Component, Input} from '@angular/core';
import {FormType} from "../../../shared/enums/form-type";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {NotificationService} from "../../../shared/services/notification.service";
import {NotificationType} from "../../../shared/enums/notification-type";
import {Scientist} from "../../core/models/scientist";
import {ScientistService} from "../../core/services/scientist.service";
import {Category} from "../../../categories/core/models/category";
import {ValidationService} from "../../../shared/services/validation.service";
import {EntityType} from '../../../auth/core/enums/entity-type';
import {UploadType} from "../../../custom-controls/core/types/upload-type";
import {SharedService} from "../../../shared/services/shared.service";

@Component({
    selector: 'scientist-general-form',
    templateUrl: './scientist-general-form.component.html',
    styleUrls: ['./scientist-general-form.component.scss']
})
export class ScientistGeneralFormComponent {
    @Input() formType!: FormType;
    @Input() scientist!: Scientist;
    @Input() categories!: Category[];
    @Input() returnUrl!: string;

    isLoading: boolean = false;

    form!: FormGroup;

    entityType = EntityType.Scientist;

    public get type(): typeof FormType {
        return FormType;
    }

    public get uploadType(): typeof UploadType {
        return UploadType;
    }

    constructor(
        public validationService: ValidationService,
        private fb: FormBuilder,
        private router: Router,
        private sharedService: SharedService,
        private notificationService: NotificationService,
        private scientistService: ScientistService) {
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
            employmentCollege: this.fb.group({
                translations: this.fb.group({
                    HR: new FormControl('', Validators.required),
                    EN: new FormControl('', Validators.required)
                })
            }),
            functions: this.fb.group({
                translations: this.fb.group({
                    HR: new FormControl(''),
                    EN: new FormControl('')
                })
            }),
            projects: this.fb.group({
                translations: this.fb.group({
                    HR: new FormControl(''),
                    EN: new FormControl('')
                })
            }),
            firstname: new FormControl('', Validators.required),
            lastname: new FormControl('', Validators.required),
            email: new FormControl('', Validators.required),
            website: new FormControl(''),
            googleScholarLink: new FormControl('', Validators.required),
            croRisLink: new FormControl(''),
            crosbiLink: new FormControl(''),
            newsletterCategories: new FormControl('', Validators.required),
            categories: new FormControl('', Validators.required),
            categoryTags: new FormControl('', Validators.required),
            automaticProfileUpdateConsent: new FormControl('')
        })

        this.sharedService.broadcastFormChanges(this.form);
    }

    /**
     * Initializes form if
     * edit form action is triggered.
     */
    private initEditForm(): void {
        this.form = this.fb.group({
            title: this.fb.group({
                translations: this.fb.group({
                    HR: new FormControl(this.scientist.title.translations.HR, Validators.required),
                    EN: new FormControl(this.scientist.title.translations.EN, Validators.required)
                })
            }),
            description: this.fb.group({
                translations: this.fb.group({
                    HR: new FormControl(this.scientist.description.translations.HR, Validators.required),
                    EN: new FormControl(this.scientist.description.translations.EN, Validators.required)
                })
            }),
            employmentCollege: this.fb.group({
                translations: this.fb.group({
                    HR: new FormControl(this.scientist.employmentCollege.translations.HR, Validators.required),
                    EN: new FormControl(this.scientist.employmentCollege.translations.EN, Validators.required)
                })
            }),
            functions: this.fb.group({
                translations: this.fb.group({
                    HR: new FormControl(this.scientist.functions.translations.HR),
                    EN: new FormControl(this.scientist.functions.translations.EN)
                })
            }),
            projects: this.fb.group({
                translations: this.fb.group({
                    HR: new FormControl(this.scientist.projects.translations.HR),
                    EN: new FormControl(this.scientist.projects.translations.EN)
                })
            }),
            firstname: new FormControl(this.scientist.firstname, Validators.required),
            lastname: new FormControl(this.scientist.lastname, Validators.required),
            email: new FormControl(this.scientist.email, Validators.required),
            website: new FormControl(this.scientist.website),
            googleScholarLink: new FormControl(this.scientist.googleScholarLink, Validators.required),
            croRisLink: new FormControl(this.scientist.croRisLink, Validators.required),
            crosbiLink: new FormControl(this.scientist.crosbiLink, Validators.required),
            newsletterCategories: new FormControl(this.scientist.newsletterCategories.map(x => x.id), Validators.required),
            categories: new FormControl(this.scientist.categories.map(x => x.id), Validators.required),
            categoryTags: new FormControl(this.scientist.categoryTags.split(";").slice(0,-1), Validators.required),
            automaticProfileUpdateConsent: new FormControl(this.scientist.automaticProfileUpdateConsent)
        })

        this.sharedService.broadcastFormChanges(this.form);
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
            this.createScientist() :
            this.editScientist();
    }

    /**
     * Connecting to scientist
     * service and sending form data to
     * create new scientist.
     */
    private createScientist(): void {
        this.scientistService.createScientist(this.form.value).subscribe(() => {
                this.notificationService
                    .showNotification(NotificationType.Success,
                        'scientists.successfully-created');

                this.router.navigateByUrl(this.returnUrl).then();

                this.isLoading = false;
            },
            (error) => {
                this.notificationService
                    .showNotification(NotificationType.Error,
                        'correct-validation-errors-with-translations');

                this.isLoading = false;
            })
    }

    /**
     * Connecting to scientist
     * service and sending form data to
     * updated selected scientist.
     */
    private editScientist(): void {
        this.scientistService.editScientist(this.scientist.id, this.form.value).subscribe(() => {
                this.notificationService
                    .showNotification(NotificationType.Success,
                        'scientists.successfully-updated');

                this.router.navigateByUrl(this.returnUrl).then();

                this.sharedService.setPendingChangesStatus(false);

                this.isLoading = false;
            },
            (error) => {
                this.notificationService
                    .showNotification(NotificationType.Error,
                        'correct-validation-errors-with-translations');

                this.isLoading = false;
            })
    }
}
