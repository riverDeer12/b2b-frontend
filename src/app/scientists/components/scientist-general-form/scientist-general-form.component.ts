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

    form!: FormGroup;

    entityType = EntityType.Scientist;

    public get type(): typeof FormType {
        return FormType;
    }

    constructor(
        public validationService: ValidationService,
        private fb: FormBuilder,
        private router: Router,
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
            firstname: new FormControl('', Validators.required),
            lastname: new FormControl('', Validators.required),
            email: new FormControl('', Validators.required),
            website: new FormControl('', Validators.required),
            googleScholarLink: new FormControl('', Validators.required),
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
                    HR: new FormControl(this.scientist.functions.translations.HR, Validators.required),
                    EN: new FormControl(this.scientist.functions.translations.EN, Validators.required)
                })
            }),
            projects: this.fb.group({
                translations: this.fb.group({
                    HR: new FormControl(this.scientist.projects.translations.HR, Validators.required),
                    EN: new FormControl(this.scientist.projects.translations.EN, Validators.required)
                })
            }),
            firstname: new FormControl(this.scientist.firstname, Validators.required),
            lastname: new FormControl(this.scientist.lastname, Validators.required),
            email: new FormControl(this.scientist.email, Validators.required),
            website: new FormControl(this.scientist.website, Validators.required),
            googleScholarLink: new FormControl(this.scientist.googleScholarLink, Validators.required),
            categories: new FormControl(this.scientist.categories.map(x => x.id), Validators.required),
        })
    }

    /**
     * Method that is triggered
     * by clicking submit button.
     */
    submit(): void {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            this.notificationService
                .showNotification(NotificationType.Error,
                    'correct-validation-errors');
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
                        'scientist-successfully-created');
            },
            (error) => {
                this.notificationService
                    .showNotification(NotificationType.Error,
                        'correct-validation-errors');
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
                        'scientist-successfully-updated');
            },
            (error) => {
                this.notificationService
                    .showNotification(NotificationType.Error,
                        'correct-validation-errors');
            })
    }
}
